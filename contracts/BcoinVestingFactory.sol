// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./BcoinVesting.sol";


/**
<<<<<<< Updated upstream
 * @dev PrivateSaleBcoinVesting will be blocked and release 10% each month.
 * Hence, the vestingDuration should be 10 months from the beginning.
 * 
 */
contract PrivateSaleBcoinVesting is BcoinVesting {
    constructor(address _token,
                address _owner, 
                uint256 _vestingStartAt
                ) BcoinVesting(_token, _owner, _vestingStartAt, 10) {}
=======
 * @dev PrivateSaleBCoinVesting will be blocked and release 5% each month.
 * Hence, the vestingDuration should be 20 months from the beginning.
 * BUT, return 5% after 1 day from TGE -> _vestingStartAt - (1 month + 1day)
 */
contract PrivateSaleBCoinVesting is BCoinVesting {
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt - (2628000 + 24 * 3600)), 20) {}
}

/**
 * @dev EcoFunBCoinVesting will be blocked 1 month and release 5% each month.
 * Hence, the vestingDuration should be 20 months from the beginning.
 *
 */
contract EcoFunBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 2628000), 20) {}
>>>>>>> Stashed changes
}


/**
<<<<<<< Updated upstream
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
=======
 * @dev TeamBCoinVesting will be blocked for 1 year, then release 5% each month.
 * then releaseed linearly each month during the next year.
 * Hence, the _vestingStartAt should delay 1 year
 * and the vestingDuration should be 20 months.
 *
 */
contract TeamBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 31536000), 20) {}
}

/**
 * @dev MarketingBCoinVesting will be release 5% each month.
 * then releaseed linearly each month during the next year.
 * and the vestingDuration should be 20 months.
 *
 */
contract MarketingBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 2628000), 20) {}
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
 * @dev ReserveBCoinVesting will be unlock when the pool reward runs out,
 * Hence, the _vestingStartAt should now, and 1 month for all.
 *
 */
contract ReserveBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, _vestingStartAt, 1) {}
>>>>>>> Stashed changes
}


/**
 * @dev BcoinVestingFactory is the main and is the only contract should be deployed.
 * Notice: remember to config the Token address and approriate startAtTimeStamp
 */
<<<<<<< Updated upstream
contract BcoinVestingFactory {
    // put the token address here
    // This should be included in the contract for transparency 
    address public BCOIN_TOKEN_ADDRESS = 0xd9145CCE52D386f254917e481eB44e9943F39138;
    
    // put the startAtTimeStamp here
    // To test all contracts, change this timestamp to time in the past.
    uint256 public startAtTimeStamp = 1624681036;
    
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
=======
contract BCoinVestingFactory {
  // put the token address here
  // This should be included in the contract for transparency
  address public BCOIN_TOKEN_ADDRESS = 0xfda1003A66692bf5E6d947ED9f648F9BA265d04f;

  // put the startAtTimeStamp here
  // To test all contracts, change this timestamp to time in the past.
  uint256 public startAtTimeStamp = 1656216479;

  // address to track other information
  address public owner;
  address public privateSaleBCoinVesting;
  address public teamBCoinVesting;
  address public ecosystemBCoinVesting;
  address public marketingBCoinVesting;
  address public dexLiquidityBCoinVesting;
  address public reserveBCoinVesting;

  constructor() {
    owner = msg.sender;

    PrivateSaleBCoinVesting _privateSaleBCoinVesting = new PrivateSaleBCoinVesting(
      BCOIN_TOKEN_ADDRESS,
      owner,
      startAtTimeStamp
    );
    privateSaleBCoinVesting = address(_privateSaleBCoinVesting);

    TeamBCoinVesting _teamBCoinVesting = new TeamBCoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
    teamBCoinVesting = address(_teamBCoinVesting);

    EcoFunBCoinVesting _ecoBCoinVesting = new EcoFunBCoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
    ecosystemBCoinVesting = address(_ecoBCoinVesting);

    MarketingBCoinVesting _marketingBCoinVesting = new MarketingBCoinVesting(
      BCOIN_TOKEN_ADDRESS,
      owner,
      startAtTimeStamp
    );
    marketingBCoinVesting = address(_marketingBCoinVesting);

    DexLiquidityBCoinVesting _dexLiquidityBCoinVesting = new DexLiquidityBCoinVesting(
      BCOIN_TOKEN_ADDRESS,
      owner,
      startAtTimeStamp
    );
    dexLiquidityBCoinVesting = address(_dexLiquidityBCoinVesting);

    ReserveBCoinVesting _reserveBCoinVesting = new ReserveBCoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
    reserveBCoinVesting = address(_reserveBCoinVesting);
  }
}
>>>>>>> Stashed changes
