// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./IERC20.sol";

/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     * - Subtraction cannot overflow.
     *
     * _Available since v2.4.0._
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        // Solidity only automatically asserts when dividing by 0
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     * - The divisor cannot be zero.
     *
     * _Available since v2.4.0._
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

/*
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with GSN meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 * prevent people from mistakenly deploying
 */
abstract contract Context {
    // prevent people from mistakenly deploying
    // an instance of this contract, which should be used via inheritance.
    constructor () { }

    function _msgSender() internal view returns (address sender) {
        return msg.sender;
    }

    function _msgData() internal view returns (bytes memory) {
        this;
        return msg.data;
    }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
abstract contract Ownable is Context {
    address private _owner;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor ()  {
        address msgSender = _msgSender();
        _owner = msgSender;
        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(isOwner(), "Ownable: caller is not the owner");
        _;
    }

    /**
     * @dev Returns true if the caller is the current owner.
     */
    function isOwner() public view returns (bool) {
        return _msgSender() == _owner;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * DANGER: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public onlyOwner {
        _transferOwnership(newOwner);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     */
    function _transferOwnership(address newOwner) internal {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }
}

/**
 * @dev Block BCOIN token over a duration and slowly release as stated 
 * the whitepaper.
 * To ensure the transparency, this contract should be deployed via the VestingFactory.
 */
abstract contract BcoinVesting is Ownable {
    using SafeMath for uint256;
    
    // Address of BCOIN Token.
    IERC20 public bcoinToken;
    
    // Starting timestamp of vesting 
    // Will be used as a starting point for all dates calculations.
    // The first vesting will happen one month after this timestamp
    uint256 public vestingStartAt;
    
    // Vesting duration in seconds
    uint256 public vestingDuration;
    
    // Vesting cliff is one month
    // 365*(60*60*24) / 12
    uint256 constant internal SECONDS_PER_MONTH = 2628000; 
    
    // Percent of vested token which can be withraw per month;
    uint256 internal percent_unlease_per_month; 
    
    
    // Beneficiary contains details of each beneficiary/investor
    struct Beneficiary {
        uint256 initialBalance;
        uint256 monthsClaimed;
        uint256 totalClaimed;
    }
    
    // beneficiaries tracks all beneficiary and store data in storage
    mapping(address => Beneficiary) public beneficiaries;
    
    
    // Event raised on each successful withdraw.
    event Claim(address beneficiary, uint256 amount, uint256 timestamp);
    
    // Event raised on each desposit 
    event Deposit(address beneficiary, uint256 initialBalance, uint256 timestamp);
    
    
    // @dev constructor creates the vesting contract
    // @param _token Address of BCOIN token 
    // @param _owner Address of owner of this contract, a.k.a the CEO 
    // @param _vestingStartAt the starting timestamp of vesting , in seconds.
    // @param _vestingDuration the duration since _vestingStartAt until the vesting ends, in months.
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt,
                uint256 _vestingDuration) {
        require(_token != address(0), "zero-address");
        require(_owner != address(0), "zero-address");
        bcoinToken = IERC20(_token);
        _transferOwnership(_owner);
        vestingStartAt = _vestingStartAt;
        vestingDuration = _vestingDuration;
    }
    
    // @dev addBeneficiary registers a beneficiary and deposit a 
    // corresponded amount of token for this beneficiary
    //
    // The owner can call this function many times to update
    // (additionally desposit) the amount of token for this beneficiary
    // @param _beneficiary Address of the beneficiary
    // @param _amount Amount of token belongs to this beneficiary
    function addBeneficiary(address _beneficiary,
                            uint256 _amount
                            ) public onlyOwner {
        //require(block.timestamp < vestingStartAt, "not-update-after-vesting-started");
        require(_beneficiary != address(0), "zero-address");
        // Based on ERC20 standard, to transfer funds to this contract, 
        // the owner must first call approve() to allow to transfer token to this contract.
        require(bcoinToken.transferFrom(_msgSender(), address(this), _amount),
                "cannot-transfer-token-to-this-contract");
        
        // update storage data
        Beneficiary storage bf = beneficiaries[_beneficiary];
        bf.initialBalance = bf.initialBalance.add(_amount);
        
        emit Deposit(_beneficiary, bf.initialBalance, block.timestamp);
    }
    
    // @dev Claim withraws the vested token and sends beneficiary 
    // Only the owner or the beneficiary can call this function
    // @param _beneficiary Address of the beneficiary 
    function claimVestedToken(address _beneficiary) public {
        require(isOwner() || (_msgSender() == _beneficiary), "must-be-onwer-or-beneficiary");
        uint256 monthsVestable;
        uint256 tokenVestable;
        (monthsVestable, tokenVestable) = calculateClaimable(_beneficiary);
        require(tokenVestable > 0, "nothing-to-be-vested");
    
        require(bcoinToken.transfer(msg.sender, tokenVestable), "fail-to-transfer-token");
    
        // update data in blockchain storage
        Beneficiary storage bf = beneficiaries[_beneficiary];
        bf.monthsClaimed = bf.monthsClaimed.add(monthsVestable);
        bf.totalClaimed = bf.totalClaimed.add(tokenVestable);
        
        emit Claim(_msgSender(), tokenVestable, block.timestamp);
        
    }
    
    // calculateWithrawable calculates the claimable token of the beneficiary
    // claimable token each month is rounded if it is a decimal number
    // So the rest of the token will be claimed on the last month (the duration is over)
    // @param _beneficiary Address of the beneficiary 
    function calculateClaimable(address _beneficiary
                ) private
                view
                returns (uint256 , uint256) {
                    
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
    function getBeneficiary(address _beneficiary) 
        public 
        view 
        returns (
        uint256 initialBalance,
        uint256 monthsClaimed,
        uint256 totalClaimed) {
            
        Beneficiary storage bf = beneficiaries[_beneficiary];
        require(bf.initialBalance > 0, "beneficiary-not-found");
        
        return(bf.initialBalance,
               bf.monthsClaimed,
               bf.totalClaimed);
        }
    
    
}


