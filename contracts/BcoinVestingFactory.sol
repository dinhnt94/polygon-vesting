// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./BcoinVesting.sol";


/**
 * @dev PrivateSaleBcoinVesting will be blocked and release 10% each month.
 * Hence, the vestingDuration should be 10 months from the beginning.
 * 
 */
contract PrivateSaleBcoinVesting is BcoinVesting {
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, _vestingStartAt, 10) {}
}


/**
 * @dev PublicSaleBcoinVesting will be releaseed linearly each month during the next year.
 * Hence, the vestingDuration should be 12 months.
 * 
 */
contract PublicSaleBcoinVesting is BcoinVesting {
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, _vestingStartAt , 12) {}
}


/**
 * @dev TeamBcoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next year.
 * Hence, the _vestingStartAt should delay 1 year 
 * and the vestingDuration should be 12 months.
 * 
 */
contract TeamBcoinVesting is BcoinVesting {
    //uint256 private SECONDS_PER_YEAR = 31536000;
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, (_vestingStartAt + 31536000) , 12) {}
}

/**
 * @dev AdvisorBcoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next year.
 * Hence, the _vestingStartAt should delay 1 year 
 * and the vestingDuration should be 12 months.
 * 
 */
contract AdvisorBcoinVesting is BcoinVesting {
    //uint256 private SECONDS_PER_YEAR = 31536000;
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, (_vestingStartAt + 31536000) , 12) {}
}

/**
 * @dev DexLiquidityBcoinVesting will be blocked for 1 month,
 * then releaseed 5% each month during the next year.
 * Hence, the _vestingStartAt should delay 1 month 
 * and the vestingDuration should be 20 months.
 * 
 */
contract DexLiquidityBcoinVesting is BcoinVesting {
    //uint256 private SECONDS_PER_MONTH = 2628000;
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, (_vestingStartAt + 2628000) , 20) {}
}

/**
 * @dev ReserveBcoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next 2 year.
 * Hence, the _vestingStartAt should delay 1 year 
 * and the vestingDuration should be 24 months.
 * 
 */
contract ReserveBcoinVesting is BcoinVesting {
    //uint256 private SECONDS_PER_YEAR = 31536000;
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, (_vestingStartAt + 31536000) , 24) {}
}


/**
 * @dev BcoinVestingFactory is the main and is the only contract should be deployed.
 * Notice: remember to config the Token address and approriate startAtTimeStamp
 */
contract BcoinVestingFactory {
    // put the token address here
    // This should be included in the contract for transparency 
    address public BCOIN_TOKEN_ADDRESS = 0x0000000000000000000000000000000000000000;
    
    // put the startAtTimeStamp here
    uint256 public startAtTimeStamp = 0;
    
    // address to track other information
    address public owner;
    address public privateSaleBcoinVesting;
    address public publicSaleBcoinVesting;
    address public teamBcoinVesting;
    address public advisorBcoinVesting;
    address public dexLiquidityBcoinVesting;
    address public reserveBcoinVesting;
    
    constructor() {
        owner = msg.sender;
        
        PrivateSaleBcoinVesting _privateSaleBcoinVesting = new PrivateSaleBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        privateSaleBcoinVesting = address(_privateSaleBcoinVesting);
        
        PublicSaleBcoinVesting _publicSaleBcoinVesting = new PublicSaleBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        publicSaleBcoinVesting = address(_publicSaleBcoinVesting);
        
        TeamBcoinVesting _teamBcoinVesting = new TeamBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        teamBcoinVesting = address(_teamBcoinVesting);
        
        AdvisorBcoinVesting _advisorBcoinVesting = new AdvisorBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        advisorBcoinVesting = address(_advisorBcoinVesting);
        
        DexLiquidityBcoinVesting _dexLiquidityBcoinVesting = new DexLiquidityBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        dexLiquidityBcoinVesting = address(_dexLiquidityBcoinVesting);
        
        ReserveBcoinVesting _reserveBcoinVesting = new ReserveBcoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
        reserveBcoinVesting = address(_reserveBcoinVesting);
        
    }
    
}