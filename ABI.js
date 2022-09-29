const portalABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_to",
        "type": "address"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [],
    "name": "getAllHistory",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "fullName",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "wallet",
            "type": "address"
          },
          {
            "internalType": "string",
            "name": "telegram",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "twitter",
            "type": "string"
          },
          {
            "internalType": "uint256",
            "name": "amount",
            "type": "uint256"
          },
          {
            "internalType": "string",
            "name": "txn",
            "type": "string"
          }
        ],
        "internalType": "struct portalContract.HistoryInfo[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_txn",
        "type": "string"
      }
    ],
    "name": "putNewHistory",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_fullName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_telName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_twiName",
        "type": "string"
      }
    ],
    "name": "transfer",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
]