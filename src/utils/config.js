// config edit here
export const BCOINTOKEN_SMC = "0x288aDf230427b3B6De2497ac9161aD5482529031";
export const PRIVATESALEBCOINVESTING_SMC = "0x229acEf8296018812D92f20ee723fC5BD439E08c";

const token_env = {
  private: {
    BCOINTOKEN_SMC: "0x288aDf230427b3B6De2497ac9161aD5482529031",
    PRIVATESALEBCOINVESTING_SMC: "0x229acEf8296018812D92f20ee723fC5BD439E08c"
  },
  dev: {
    BCOINTOKEN_SMC: "0x288aDf230427b3B6De2497ac9161aD5482529031",
    PRIVATESALEBCOINVESTING_SMC: "0x229acEf8296018812D92f20ee723fC5BD439E08c"
  },
  advisor: {
    BCOINTOKEN_SMC: "0x288aDf230427b3B6De2497ac9161aD5482529031",
    PRIVATESALEBCOINVESTING_SMC: "0x229acEf8296018812D92f20ee723fC5BD439E08c"
  }
};
// end config edit
const setConfig = ({ BCOINTOKEN_SMC, PRIVATESALEBCOINVESTING_SMC }) => {
  const BCOINTOKEN = {
    address: BCOINTOKEN_SMC,
    abi: [
      {
        inputs: [],
        stateMutability: "payable",
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
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          }
        ],
        name: "mint",
        outputs: [],
        stateMutability: "nonpayable",
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
      }
    ]
  };
  const PRIVATESALEBCOINVESTING = {
    address: PRIVATESALEBCOINVESTING_SMC,
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "beneficiary",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "amount",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          }
        ],
        name: "Claim",
        type: "event"
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: false,
            internalType: "address",
            name: "beneficiary",
            type: "address"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "initialBalance",
            type: "uint256"
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "timestamp",
            type: "uint256"
          }
        ],
        name: "Deposit",
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
        inputs: [
          {
            internalType: "address",
            name: "_beneficiary",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "_amount",
            type: "uint256"
          }
        ],
        name: "addBeneficiary",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_beneficiary",
            type: "address"
          }
        ],
        name: "claimVestedToken",
        outputs: [],
        stateMutability: "nonpayable",
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
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address"
          },
          {
            internalType: "address",
            name: "_owner",
            type: "address"
          },
          {
            internalType: "uint256",
            name: "_vestingStartAt",
            type: "uint256"
          }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
      },
      {
        inputs: [],
        name: "bcoinToken",
        outputs: [
          {
            internalType: "contract IERC20",
            name: "",
            type: "address"
          }
        ],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "",
            type: "address"
          }
        ],
        name: "beneficiaries",
        outputs: [
          {
            internalType: "uint256",
            name: "initialBalance",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "monthsClaimed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "totalClaimed",
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
            name: "_beneficiary",
            type: "address"
          }
        ],
        name: "getBeneficiary",
        outputs: [
          {
            internalType: "uint256",
            name: "initialBalance",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "monthsClaimed",
            type: "uint256"
          },
          {
            internalType: "uint256",
            name: "totalClaimed",
            type: "uint256"
          }
        ],
        stateMutability: "view",
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
        name: "vestingDuration",
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
        inputs: [],
        name: "vestingStartAt",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256"
          }
        ],
        stateMutability: "view",
        type: "function"
      }
    ]
  };

  return { BCOINTOKEN, PRIVATESALEBCOINVESTING };
};

export const getConfig = (type) => {
  const token = token_env[type];
  const result = setConfig(token);
  return result;
};
