// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/math/SafeMathUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/utils/SafeERC20Upgradeable.sol";
import "./PolygonBombVesting.sol";


contract PolygonBombVestingPrivate is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}



contract PolygonBombVestingDex is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}



contract PolygonBombVestingEcoSys is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}



contract PolygonBombVestingMarketing is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}



contract PolygonBombVestingTeam is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}



contract PolygonBombVestingReserves is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}


contract PolygonBombVestingPackage2 is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}


contract PolygonBombVestingStake is PolygonBombVesting, UUPSUpgradeable {
  // @dev constructor creates the vesting contract
  // @param _token Address of BOMB token
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
}