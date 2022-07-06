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
        // const VestingPrivateProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingPrivate, [BCoinTokenAddress, startPrivate, 20], { deployer, kind: 'uups' });
        // await forceImport(VestingPrivateProxyAddress, BCoinIDO);
        // await upgradeProxy(VestingPrivateProxyAddress, VestingPrivate, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startDex = (_vestingStartAt + 2628000)
        const VestingDexProxyAddress = "0xAc2AE3a0a4Bb8B2D66F26417D8a8984C9B05D5Bd";
        // await deployProxy(VestingDex, [BCoinTokenAddress, startDex, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingDexProxyAddress, VestingDex, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startEco = (_vestingStartAt + 2628000)
        const VestingEcoProxyAddress = "0x20D0F332eEbE63De3bc2aa18Eff0981547C68f89";
        // await deployProxy(VestingEco, [BCoinTokenAddress, startEco, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingEcoProxyAddress, VestingEco, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startMarketing = (_vestingStartAt + 2628000);
        const VestingMarketingProxyAddress = "0xf446525F3E12311FE25776BAfFe0E302f39a12B6";
        // await deployProxy(VestingMarketing, [BCoinTokenAddress, startMarketing, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingMarketingProxyAddress, VestingMarketing, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startTeam = (_vestingStartAt + 31536000)
        const VestingTeamProxyAddress = "0xb6a72be08b2697FA59DA735303EEFBA10B17b077";
        // await deployProxy(VestingTeam, [BCoinTokenAddress, startTeam, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingTeamProxyAddress, VestingTeam, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startReserves = _vestingStartAt;
        const VestingReservesProxyAddress = "0x41a6B12f740078d1FAf1fC4103932E92DbEDeE56";
        // await deployProxy(VestingReserves, [BCoinTokenAddress, startReserves, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingReservesProxyAddress, VestingReserves, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

    } else if (network === `polygon`) {
        const BCoinTokenAddress = "0xB2C63830D4478cB331142FAc075A39671a5541dC";
        const _vestingStartAt = 1657098000; // 1/1/2022

        const startPrivate = (_vestingStartAt - (2628000 + 24 * 3600))
        const VestingPrivateProxyAddress = "0x04ED8933eEb61344554DEc763fB8aE21D2682395";
        // await deployProxy(VestingPrivate, [BCoinTokenAddress, startPrivate, 20], { deployer, kind: 'uups' });
        // await forceImport(VestingPrivateProxyAddress, BCoinIDO);
        // await upgradeProxy(VestingPrivateProxyAddress, VestingPrivate, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startDex = (_vestingStartAt + 2628000)
        const VestingDexProxyAddress = "0xAc2AE3a0a4Bb8B2D66F26417D8a8984C9B05D5Bd";
        // await deployProxy(VestingDex, [BCoinTokenAddress, startDex, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingDexProxyAddress, VestingDex, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startEco = (_vestingStartAt + 2628000)
        const VestingEcoProxyAddress = "0x20D0F332eEbE63De3bc2aa18Eff0981547C68f89";
        // await deployProxy(VestingEco, [BCoinTokenAddress, startEco, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingEcoProxyAddress, VestingEco, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startMarketing = (_vestingStartAt + 2628000);
        const VestingMarketingProxyAddress = "0xf446525F3E12311FE25776BAfFe0E302f39a12B6";
        // await deployProxy(VestingMarketing, [BCoinTokenAddress, startMarketing, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingMarketingProxyAddress, VestingMarketing, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startTeam = (_vestingStartAt + 31536000)
        const VestingTeamProxyAddress = "0xb6a72be08b2697FA59DA735303EEFBA10B17b077";
        // await deployProxy(VestingTeam, [BCoinTokenAddress, startTeam, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingTeamProxyAddress, VestingTeam, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startReserves = _vestingStartAt;
        const VestingReservesProxyAddress = "0x41a6B12f740078d1FAf1fC4103932E92DbEDeE56";
        // await deployProxy(VestingReserves, [BCoinTokenAddress, startReserves, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingReservesProxyAddress, VestingReserves, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

    }
}