# cryptobot_smc

## Notes
- The Token.sol is for testing purpose only, which should be replaced by the real Token smc.

---
## How to use/test:

Let's call Wallet_A the owner of the project (he is also the deployer.)

1 - deploy Token.sol, save the contract address (call address_1)

2 - mint some tokens (1000000 BCOIN) for Wallet_A.

3 - change the BCOIN_TOKEN_ADDRESS in BcoinVestingFactory.sol to the address_1. This address should always be hardcoded in the source code.

4 - change the startAtTimeStamp to any timestamp you wish, based on your testing strategy.

5 - deploy BcoinVestingFactory.sol

6 - after BcoinVestingFactory is deployed, it also deploys other child vesting contracts and stores their addresses. Now let's assume we want to test the privateSaleBcoinVesting, we will get its deployed address (call address_2) and move to step 7

7 - using Wallet_A, call Token.approve(address_2, 1000) to allow the privateSaleBcoinVesting contract use 1000 Bcoin of Wallet_A. Read ERC20 specs to understand this methodlogy.

8 - using Wallet_A, call PrivateSaleBcoinVesting.addBeneficiary(Wallet_B, 1000) . Where Wallet_B is the address of investor B. This step will move 1000 bcoin tokens of Wallet_A to this contract, and block it here, wait to unlease for Wallet_B when the time comes. 

9 - call PrivateSaleBcoinVesting.getBeneficiary(Wallet_B) to check his data.

10 - using Wallet_A or Wallet_B, call PrivateSaleBcoinVesting.claimVestedToken(Wallet_B) to claim Token for Wallet_B. The contract will throw error if nothing to be claimed. For security, the contract should also throw error if the caller is not Wallet_A (onwer) or Wallet_B (the beneficiary hiself).

11 - If claimed successfully (because we adjust startAtTimeStamp to time in the past,) Call PrivateSaleBcoinVesting.getBeneficiary(Wallet_B) to check data of Wallet_B. 

12 - Additionary, during the whole process, call Token.BalanceOf(address), where address can be Wallet_A, Wallet_B or privateSaleBcoinVesting on each step to track whether the fund is moved correctly.

---
