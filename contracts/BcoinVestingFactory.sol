// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "./BCoinVesting.sol";

/**
 * @dev PrivateSaleBCoinVesting will be blocked and release 10% each month.
 * Hence, the vestingDuration should be 10 months from the beginning.
 *
 */
contract PrivateSaleBCoinVesting is BCoinVesting {
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, _vestingStartAt, 10) {}
}

/**
 * @dev TeamBCoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next year.
 * Hence, the _vestingStartAt should delay 1 year
 * and the vestingDuration should be 12 months.
 *
 */
contract TeamBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 31536000), 12) {}
}

/**
 * @dev AdvisorBCoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next year.
 * Hence, the _vestingStartAt should delay 1 year
 * and the vestingDuration should be 12 months.
 *
 */
contract AdvisorBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 31536000), 12) {}
}

/**
 * @dev DexLiquidityBCoinVesting will be blocked for 1 month,
 * then releaseed 5% each month during the next year.
 * Hence, the _vestingStartAt should delay 1 month
 * and the vestingDuration should be 20 months.
 *
 */
contract DexLiquidityBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_MONTH = 2628000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 2628000), 20) {}
}

/**
 * @dev ReserveBCoinVesting will be blocked for 1 year,
 * then releaseed linearly each month during the next 2 year.
 * Hence, the _vestingStartAt should delay 1 year
 * and the vestingDuration should be 24 months.
 *
 */
contract ReserveBCoinVesting is BCoinVesting {
  //uint256 private SECONDS_PER_YEAR = 31536000;
  constructor(
    address _token,
    address _owner,
    uint256 _vestingStartAt
  ) BCoinVesting(_token, _owner, (_vestingStartAt + 31536000), 24) {}
}

/**
 * @dev BCoinVestingFactory is the main and is the only contract should be deployed.
 * Notice: remember to config the Token address and approriate startAtTimeStamp
 */
contract BCoinVestingFactory {
  // put the token address here
  // This should be included in the contract for transparency
  address public BCOIN_TOKEN_ADDRESS = 0x648a9CF8E95c73110D28E7e2329b2D0910Bd36B8;

  // put the startAtTimeStamp here
  // To test all contracts, change this timestamp to time in the past.
  uint256 public startAtTimeStamp = 1631174400;

  // address to track other information
  address public owner;
  address public privateSaleBCoinVesting;
  address public teamBCoinVesting;
  address public advisorBCoinVesting;
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

    AdvisorBCoinVesting _advisorBCoinVesting = new AdvisorBCoinVesting(BCOIN_TOKEN_ADDRESS, owner, startAtTimeStamp);
    advisorBCoinVesting = address(_advisorBCoinVesting);

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
