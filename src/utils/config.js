import PrivateSaleVestingABI from '../ABIs/PrivateSaleVesting.json'

// config edit here
const token_env = {
  // smc config private
  private: {
    BCOINTOKEN_SMC: "0xB2C63830D4478cB331142FAc075A39671a5541dC",
    PRIVATESALEBCOINVESTING_SMC: "0xE5F75BE1798A8F5422ADcbDA950C1E2Aaa969f8B"
  },
  // smc config team
  team: {
    BCOINTOKEN_SMC: "0xB2C63830D4478cB331142FAc075A39671a5541dC",
    PRIVATESALEBCOINVESTING_SMC: "0x19825A89b96991cf07923f99D6395711270fF92F"
  },
  // smc config advisor
  // advisor: {
  //   BCOINTOKEN_SMC: "0xB2C63830D4478cB331142FAc075A39671a5541dC",
  //   PRIVATESALEBCOINVESTING_SMC: "0x8b62bf1b4234911b3449f1e1c71f30686b4fad0f"
  // },
  // smc config dex
  dex: {
    BCOINTOKEN_SMC: "0xB2C63830D4478cB331142FAc075A39671a5541dC",
    PRIVATESALEBCOINVESTING_SMC: "0x3902E68cda5cB18CB7B4E49BE7EDE409bd85D728"
  },
  // smc config reserve
  reserve: {
    BCOINTOKEN_SMC: "0xB2C63830D4478cB331142FAc075A39671a5541dC",
    PRIVATESALEBCOINVESTING_SMC: "0xCDF804777ad2d7b397601C8DC77c23c843786bAF"
  },
  marketing: {
    BCOINTOKEN_SMC: '0xB2C63830D4478cB331142FAc075A39671a5541dC',
    PRIVATESALEBCOINVESTING_SMC: '0x640D98E6f8364A2481c1fC9953FB84E2E2dd1AfD'
  },
  ecosystem: {
    BCOINTOKEN_SMC: '0xB2C63830D4478cB331142FAc075A39671a5541dC',
    PRIVATESALEBCOINVESTING_SMC: '0xA1B6272fC1BB11b835a80368DafDb06c9370A8B3'
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
