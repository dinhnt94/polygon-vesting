import PrivateSaleVestingABI from '../ABIs/PrivateSaleVesting.json'

// config edit here
const token_env = {
  // smc config private
  private: {
    BCOINTOKEN_SMC: "0xec9588Cca99C431a500C55d029c0E28D7c225e83",
    PRIVATESALEBCOINVESTING_SMC: "0x04ED8933eEb61344554DEc763fB8aE21D2682395"
  },
  // smc config team
  team: {
    BCOINTOKEN_SMC: "0xec9588Cca99C431a500C55d029c0E28D7c225e83",
    PRIVATESALEBCOINVESTING_SMC: "0xb6a72be08b2697FA59DA735303EEFBA10B17b077"
  },
  // smc config advisor
  // advisor: {
  //   BCOINTOKEN_SMC: "0xec9588Cca99C431a500C55d029c0E28D7c225e83",
  //   PRIVATESALEBCOINVESTING_SMC: "0x8b62bf1b4234911b3449f1e1c71f30686b4fad0f"
  // },
  // smc config dex
  dex: {
    BCOINTOKEN_SMC: "0xec9588Cca99C431a500C55d029c0E28D7c225e83",
    PRIVATESALEBCOINVESTING_SMC: "0xAc2AE3a0a4Bb8B2D66F26417D8a8984C9B05D5Bd"
  },
  // smc config reserve
  reserve: {
    BCOINTOKEN_SMC: "0xec9588Cca99C431a500C55d029c0E28D7c225e83",
    PRIVATESALEBCOINVESTING_SMC: "0x41a6B12f740078d1FAf1fC4103932E92DbEDeE56"
  },
  marketing: {
    BCOINTOKEN_SMC: '0xec9588Cca99C431a500C55d029c0E28D7c225e83',
    PRIVATESALEBCOINVESTING_SMC: '0xf446525F3E12311FE25776BAfFe0E302f39a12B6'
  },
  ecosystem: {
    BCOINTOKEN_SMC: '0xec9588Cca99C431a500C55d029c0E28D7c225e83',
    PRIVATESALEBCOINVESTING_SMC: '0x20D0F332eEbE63De3bc2aa18Eff0981547C68f89'
  },
};
// end config edit
const setConfig = ({ BCOINTOKEN_SMC, PRIVATESALEBCOINVESTING_SMC }) => {
  const BCOINTOKEN = {
    address: BCOINTOKEN_SMC,
    abi: [
      {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Approval",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "previousOwner",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "OwnershipTransferred",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [],
        name: "Pause",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "from",
            type: "address"
          },
          {
            indexed: true,
            internalType: "address",
            name: "to",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "value",
            type: "uint256"
          }
        ],
        name: "Transfer",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [],
        name: "Unpause",
        type: "event"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "owner",
            type: "address"
          },
          {
            internalType: "address",
            name: "spender",
            type: "address"
          }
        ],
        name: "allowance",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "approve",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          }
        ],
        name: "balanceOf",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "burn",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "decimals",
        outputs: [
          {
            internalType: "uint8",
            name: "",
            type: "uint8"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "subtractedValue",
            type: "uint256"
          }
        ],
        name: "decreaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "spender",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "addedValue",
            type: "uint256"
          }
        ],
        name: "increaseAllowance",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "isOwner",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "name",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "owner",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "pause",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "paused",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "renounceOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "symbol",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [],
        name: "totalSupply",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transfer",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "sender",
            type: "address"
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "transferFrom",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "newOwner",
            type: "address"
          }
        ],
        name: "transferOwnership",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [],
        name: "unpause",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool"
          }
        ],
        stateMutability: "nonpayable",
        type: "function"
      }
    ]
  };
  const PRIVATESALEBCOINVESTING = {
    address: PRIVATESALEBCOINVESTING_SMC,
    abi: PrivateSaleVestingABI
  };

  return { BCOINTOKEN, PRIVATESALEBCOINVESTING };
};

export const getConfig = (type) => {
  const token = token_env[type];
  const result = setConfig(token);
  return result;
};
