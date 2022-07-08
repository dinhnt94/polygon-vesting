const { deployProxy, upgradeProxy, forceImport } = require('@openzeppelin/truffle-upgrades')

const VestingPrivate = artifacts.require("PolygonBombVestingPrivate");
const VestingDex = artifacts.require("PolygonBombVestingDex");
const VestingEco = artifacts.require("PolygonBombVestingEcoSys");
const VestingMarketing = artifacts.require("PolygonBombVestingMarketing");
const VestingTeam = artifacts.require("PolygonBombVestingTeam");
const VestingReserves = artifacts.require("PolygonBombVestingReserves");
const VestingPack2 = artifacts.require("PolygonBombVestingPackage2");
const VestingStake = artifacts.require("PolygonBombVestingStake");

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
        const _vestingStartAt = 1657098000; // 9h 6/7/2022 utc (6 Jul)

        const startPrivate = (_vestingStartAt - 2628000 + 24 * 3600);
        const VestingPrivateProxyAddress = "0xE5F75BE1798A8F5422ADcbDA950C1E2Aaa969f8B";
        // await deployProxy(VestingPrivate, [BCoinTokenAddress, startPrivate, 20], { deployer, kind: 'uups' });
        // await forceImport(VestingPrivateProxyAddress, BCoinIDO);
        // await upgradeProxy(VestingPrivateProxyAddress, VestingPrivate, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startDex = (_vestingStartAt + 2628000)
        const VestingDexProxyAddress = "0x3902E68cda5cB18CB7B4E49BE7EDE409bd85D728";
        // await deployProxy(VestingDex, [BCoinTokenAddress, startDex, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingDexProxyAddress, VestingDex, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startEco = (_vestingStartAt + 2628000)
        const VestingEcoProxyAddress = "0xA1B6272fC1BB11b835a80368DafDb06c9370A8B3";
        // await deployProxy(VestingEco, [BCoinTokenAddress, startEco, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingEcoProxyAddress, VestingEco, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startMarketing = (_vestingStartAt + 2628000);
        const VestingMarketingProxyAddress = "0x640D98E6f8364A2481c1fC9953FB84E2E2dd1AfD";
        // await deployProxy(VestingMarketing, [BCoinTokenAddress, startMarketing, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingMarketingProxyAddress, VestingMarketing, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startTeam = (_vestingStartAt + 31536000)
        const VestingTeamProxyAddress = "0x19825A89b96991cf07923f99D6395711270fF92F";
        // await deployProxy(VestingTeam, [BCoinTokenAddress, startTeam, 20], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingTeamProxyAddress, VestingTeam, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startReserves = _vestingStartAt;
        const VestingReservesProxyAddress = "0xCDF804777ad2d7b397601C8DC77c23c843786bAF";
        // await deployProxy(VestingReserves, [BCoinTokenAddress, startReserves, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingReservesProxyAddress, VestingReserves, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

        const startPack2 = 1680307200;  // 1/4/2023
        const VestingPack2ProxyAddress = "0x4FD4a6905eF6b0084af1e4912bB81ED41A1bDa21";
        // await deployProxy(VestingPack2, [BCoinTokenAddress, startPack2, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingPack2ProxyAddress, VestingPack2, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });


        const startStake = 1672531200;  // 1/1/2023
        const VestingStakeProxyAddress = "0x193109Df376B63D7c8907F94dfe92e8D49d72FCD";
        await deployProxy(VestingStake, [BCoinTokenAddress, startStake, 1], { deployer, kind: 'uups' });
        // await upgradeProxy(VestingStakeProxyAddress, VestingStake, { deployer, kind: 'uups', unsafeAllowRenames: true, unsafeAllow: ['state-variable-immutable'] });

    }
}