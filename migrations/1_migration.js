const { deployProxy, upgradeProxy, forceImport } = require('@openzeppelin/truffle-upgrades')

const VestingPrivate = artifacts.require("PolygonBCoinVestingPrivate");
const VestingDex = artifacts.require("PolygonBCoinVestingDex");
const VestingEco = artifacts.require("PolygonBCoinVestingEcoSys");
const VestingMarketing = artifacts.require("PolygonBCoinVestingMarketing");
const VestingTeam = artifacts.require("PolygonBCoinVestingTeam");
const VestingReserves = artifacts.require("PolygonBCoinVestingReserves");

module.exports = async function (deployer, network, accounts) {
    if (network === `polygon-testnet`) {
        
        const BCoinTokenAddress = "0xec9588Cca99C431a500C55d029c0E28D7c225e83";
        const _vestingStartAt = 1640998800; // 1/1/2022

        const startPrivate = (_vestingStartAt - (2628000 + 24 * 3600))
        const VestingProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        await deployProxy(VestingPrivate, [BCoinTokenAddress, startPrivate, 20], { deployer, kind: 'uups' });
        // await forceImport(AuctionIDOProxyAddress, BCoinIDO);
        // await upgradeProxy(VestingProxyAddress, VestingPrivate, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startDex = (_vestingStartAt + 2628000)
        const VestingDexProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingDex, [BCoinTokenAddress, startDex, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingDexProxyAddress, VestingDex, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startEco = (_vestingStartAt + 2628000)
        const VestingEcoProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingEco, [BCoinTokenAddress, startEco, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingEcoProxyAddress, VestingEco, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startMarketing = (_vestingStartAt + 2628000);
        const VestingMarketingProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingMarketing, [BCoinTokenAddress, startMarketing, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingMarketingProxyAddress, VestingMarketing, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startTeam = (_vestingStartAt + 31536000)
        const VestingTeamProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingTeam, [BCoinTokenAddress, startTeam, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingTeamProxyAddress, VestingTeam, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startReserves = _vestingStartAt;
        const VestingReservesProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingReserves, [BCoinTokenAddress, startReserves, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingReservesProxyAddress, VestingReserves, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

    }
}