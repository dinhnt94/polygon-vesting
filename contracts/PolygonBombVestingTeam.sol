// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/AccessControlUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";

// import "@openzeppelin/contracts-upgradeable/token/ERC20/IERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";

contract PolygonBCoinVestingTeam is Initializable, OwnableUpgradeable, AccessControlUpgradeable, UUPSUpgradeable {
  using SafeMathUpgradeable for uint256;
  using SafeERC20Upgradeable for IERC20Upgradeable;

  // Event raised on each successful withdraw.
  event Claim(address beneficiary, uint256 amount, uint256 timestamp);
  // Event raised on each desposit
  event Deposit(address beneficiary, uint256 initialBalance, uint256 timestamp);

  bytes32 public constant UPGRADER_ROLE = keccak256("UPGRADER_ROLE");
  bytes32 public constant VESTING_ADMIN_ROLE = keccak256("VESTING_ADMIN_ROLE");
  bytes32 public constant DESIGNER_ROLE = keccak256("DESIGNER_ROLE");

  // Address of BCOIN Token.
  IERC20Upgradeable public bcoinToken;

  // Starting timestamp of vesting
  // Will be used as a starting point for all dates calculations.
  // The first vesting will happen one month after this timestamp
  uint256 public vestingStartAt;

  // Vesting duration in seconds
  uint256 public vestingDuration;

  // Vesting cliff is one month
  // 365*(60*60*24) / 12
  uint256 internal constant SECONDS_PER_MONTH = 2628000;

  // Beneficiary contains details of each beneficiary/investor
  struct Beneficiary {
    uint256 initialBalance;
    uint256 monthsClaimed;
    uint256 totalClaimed;
    uint256 magicPercent;
  }

  // beneficiaries tracks all beneficiary and store data in storage
  mapping(address => Beneficiary) public beneficiaries;


  // @dev constructor creates the vesting contract
  // @param _token Address of BCOIN token
  // @param _owner Address of owner of this contract, a.k.a the CEO
  // @param _vestingStartAt the starting timestamp of vesting , in seconds.
  // @param _vestingDuration the duration since _vestingStartAt until the vesting ends, in months.
  function initialize(
    address _token,
    uint256 _vestingStartAt,
    uint256 _vestingDuration) public initializer {
    __Ownable_init();
    __AccessControl_init();
    __UUPSUpgradeable_init();

    _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    _grantRole(UPGRADER_ROLE, msg.sender);
    _grantRole(VESTING_ADMIN_ROLE, msg.sender);
    _grantRole(DESIGNER_ROLE, msg.sender);

    require(_token != address(0), "zero-address");
    // require(_owner != address(0), "zero-address");
    bcoinToken = IERC20Upgradeable(_token);
    // transferOwnership(_owner);
    vestingStartAt = _vestingStartAt;
    vestingDuration = _vestingDuration;
  }

  function _authorizeUpgrade(address newImplementation) internal override onlyRole(UPGRADER_ROLE) {}

  // @dev addBeneficiary registers a beneficiary and deposit a
  // corresponded amount of token for this beneficiary
  //
  // The owner can call this function many times to update
  // (additionally desposit) the amount of token for this beneficiary
  // @param _beneficiary Address of the beneficiary
  // @param _amount Amount of token belongs to this beneficiary
  function addBeneficiary(address _beneficiary, uint256 _amount) public onlyRole(DESIGNER_ROLE) {
    //require(block.timestamp < vestingStartAt, "not-update-after-vesting-started");
    require(_beneficiary != address(0), "zero-address");
    // Based on ERC20 standard, to transfer funds to this contract,
    // the owner must first call approve() to allow to transfer token to this contract.
    require(bcoinToken.transferFrom(_msgSender(), address(this), _amount), "cannot-transfer-token-to-this-contract");

    // update storage data
    Beneficiary storage bf = beneficiaries[_beneficiary];
    bf.initialBalance = bf.initialBalance.add(_amount);

    emit Deposit(_beneficiary, bf.initialBalance, block.timestamp);
  }

  // Do more adding
  // this func too much gas
  function addWhitelists(address[] memory users, uint256[] memory amounts) public onlyRole(DESIGNER_ROLE) {
    require(users.length == amounts.length, "set-diff-len");
    for (uint i = 0; i < users.length; i++) {
      addBeneficiary(users[i], amounts[i]);
    }
  }

  //
  function addBeneficiarys(address[] memory users, uint256[] memory amounts, uint _amountTotal) public onlyRole(DESIGNER_ROLE) {
    require(users.length == amounts.length, "sets-diff-len");
    require(bcoinToken.transferFrom(_msgSender(), address(this), _amountTotal), "cannot-transfer");
    for (uint i = 0; i < users.length; i++) {
      require(users[i] != address(0), "zero-address");
      // update storage data
      Beneficiary storage bf = beneficiaries[users[i]];
      bf.initialBalance = bf.initialBalance.add(amounts[i]);
    }
  }

  // Owner can nerf user when user is blacklist
  function nerfUsers(address user, uint percentage) public onlyRole(DESIGNER_ROLE) {
    // update storage data
    Beneficiary storage bf = beneficiaries[user];
    bf.magicPercent = percentage;
  }

  // Reduce balance user when wrong/inflate
  function reduceInitBalance(address user, uint reduceNum) public onlyRole(DESIGNER_ROLE) {
    // update storage data
    Beneficiary storage bf = beneficiaries[user];
    bf.initialBalance = bf.initialBalance.sub(reduceNum);
  }

  // @dev Claim withraws the vested token and sends beneficiary
  // Only the owner or the beneficiary can call this function
  // @param _beneficiary Address of the beneficiary
  function claimVestedToken(address _beneficiary) public {
    require( (owner() == msg.sender) || (_msgSender() == _beneficiary), "must-be-onwer-or-beneficiary");
    uint256 monthsVestable;
    uint256 tokenVestable;
    (monthsVestable, tokenVestable) = calculateClaimable(_beneficiary);
    require(tokenVestable > 0, "nothing-to-be-vested");

    // update data in blockchain storage
    Beneficiary storage bf = beneficiaries[_beneficiary];
    bf.monthsClaimed = bf.monthsClaimed.add(monthsVestable);
    bf.totalClaimed = bf.totalClaimed.add(tokenVestable);

    // nerf
    uint256 amount = tokenVestable.sub(tokenVestable.mul(bf.magicPercent).div(100));
    require(bcoinToken.transfer(_beneficiary, amount), "fail-to-transfer-token");

    emit Claim(_beneficiary, tokenVestable, block.timestamp);
  }

  // calculateWithrawable calculates the claimable token of the beneficiary
  // claimable token each month is rounded if it is a decimal number
  // So the rest of the token will be claimed on the last month (the duration is over)
  // @param _beneficiary Address of the beneficiary
  function calculateClaimable(address _beneficiary) private view returns (uint256, uint256) {
    uint256 _now = block.timestamp;
    if (_now < vestingStartAt) {
      return (0, 0);
    }

    uint256 elapsedTime = _now.sub(vestingStartAt);
    uint256 elapsedMonths = elapsedTime.div(SECONDS_PER_MONTH);

    if (elapsedMonths < 1) {
      return (0, 0);
    }

    Beneficiary storage bf = beneficiaries[_beneficiary];
    require(bf.initialBalance > 0, "beneficiary-not-found");

    // If over vesting duration, all tokens vested
    if (elapsedMonths >= vestingDuration) {
      uint256 remaining = bf.initialBalance.sub(bf.totalClaimed);
      return (vestingDuration, remaining);
    } else {
      uint256 monthsVestable = elapsedMonths.sub(bf.monthsClaimed);
      uint256 tokenVestedPerMonth = bf.initialBalance.div(vestingDuration);
      uint256 tokenVestable = monthsVestable.mul(tokenVestedPerMonth);
      return (monthsVestable, tokenVestable);
    }
  }

  // view function to check status of a beneficiary
  function getBeneficiary(address _beneficiary) public view
    returns (
      uint256 initialBalance,
      uint256 monthsClaimed,
      uint256 totalClaimed,
      uint256 magicPercent
    )
  {
    Beneficiary storage bf = beneficiaries[_beneficiary];
    require(bf.initialBalance > 0, "beneficiary-not-found");

    return (bf.initialBalance, bf.monthsClaimed, bf.totalClaimed, bf.magicPercent);
  }

  // update some var
  function updateVestingStart(uint _vestingStartAt) external onlyRole(DESIGNER_ROLE) {
    vestingStartAt = _vestingStartAt;
  }
  function updateVestingDuration(uint _vestingDuration) external onlyRole(DESIGNER_ROLE) {
    vestingDuration = _vestingDuration;
  }

  //for emegency
  function revokeFund() external onlyRole(VESTING_ADMIN_ROLE) {
    uint256 amount = bcoinToken.balanceOf(address(this));
    require(amount > 0, "fund-is-0");
    require(bcoinToken.transfer(msg.sender, amount), "fail-to-revoke");
  }
}