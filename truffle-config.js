/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * trufflesuite.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

const HDWalletProvider = require('@truffle/hdwallet-provider');
const LedgerWalletProvider = require('@umaprotocol/truffle-ledger-provider');

const {
  privateKey,
  bscScanApiKey,
  polygonScanApiKey,
} = require('./env.json');

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  plugins: [
    'truffle-plugin-verify',
    'truffle-contract-size'
  ],
  api_keys: {
    bscscan: bscScanApiKey,
    polygonscan: polygonScanApiKey
  },
  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 7545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },
    testnet: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl: `https://nd-322-915-601.p2pify.com/f47f33f6f54db17356b7a8aabb9ed547`, // `https://data-seed-prebsc-1-s1.binance.org:8545/`
      }),
      network_id: 97,
      confirmations: 5,
      timeoutBlocks: 200000,
      skipDryRun: true
    },
    bsc: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        providerOrUrl: `https://nd-091-631-282.p2pify.com/6c9424baed5f427aee6e99b44fca1e2d`, // https://bsc-dataseed2.binance.org`
      }),
      network_id: 56,
      confirmations: 5,
      timeoutBlocks: 200000,
      skipDryRun: true
    },
    [`bsc-ledger`]: {
      networkCheckTimeout: 100000,
      provider: () => new LedgerWalletProvider({
        networkId: 56,
        path: "44'/60'/0'/0/0",
        askConfirm: false,
        accountsLength: 1,
        accountsOffset: 0,
      }, `https://nd-091-631-282.p2pify.com/6c9424baed5f427aee6e99b44fca1e2d`), // https://bsc-dataseed2.binance.org`
      network_id: 56,
      confirmations: 10,
      timeoutBlocks: 200000,
      skipDryRun: true
    },
    [`polygon`]: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        // providerOrUrl: `https://matic-mumbai.chainstacklabs.com`,
        // providerOrUrl: `https://rpc-mumbai.maticvigil.com/`,
        providerOrUrl: `https://nd-953-941-131.p2pify.com/31fd48fc700502db75196c9a1bd58fd6`,
      }),
      network_id: 137,
      confirmations: 3,
      timeoutBlocks: 200000,
      skipDryRun: true,
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 50000000000,
    },
    [`polygon-testnet`]: {
      networkCheckTimeout: 100000,
      provider: () => new HDWalletProvider({
        privateKeys: [privateKey],
        // providerOrUrl: `https://matic-mumbai.chainstacklabs.com`,
        // providerOrUrl: `https://rpc-mumbai.maticvigil.com/`,
        //  providerOrUrl: `https://polygon-mumbai.g.alchemy.com/v2/ud_yKbp3AMor4NP-LKbD-L_2xH_jNOzm`,
        providerOrUrl: `https://nd-850-321-280.p2pify.com/ce9bd0aa75cb8a7b59e6c8bf77dc241c`,
      }),
      network_id: 80001,
      confirmations: 3,
      timeoutBlocks: 200000,
      skipDryRun: true,
      gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
      gasPrice: 80000000000,
    },
    // Another network with more advanced options...
    // advanced: {
    // port: 8777,             // Custom port
    // network_id: 1342,       // Custom network
    // gas: 8500000,           // Gas sent with each transaction (default: ~6700000)
    // gasPrice: 20000000000,  // 20 gwei (in wei) (default: 100 gwei)
    // from: <address>,        // Account to send txs from (default: accounts[0])
    // websocket: true        // Enable EventEmitter interface for web3 (default: false)
    // },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    // ropsten: {
    // provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
    // network_id: 3,       // Ropsten's id
    // gas: 5500000,        // Ropsten has a lower block limit than mainnet
    // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
    // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
    // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    // },
    // Useful for private networks
    // private: {
    // provider: () => new HDWalletProvider(mnemonic, `https://network.io`),
    // network_id: 2111,   // This network is yours, in the cloud.
    // production: true    // Treats this network as if it was a public net. (default: false)
    // }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.7",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
        evmVersion: "byzantium"
      }
    }
  },

  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows: 
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};