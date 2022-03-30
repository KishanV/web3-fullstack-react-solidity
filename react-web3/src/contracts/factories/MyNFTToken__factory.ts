/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MyNFTToken, MyNFTTokenInterface } from "../MyNFTToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620024063803806200240683398181016040528101906200003791906200053f565b81818160039080519060200190620000519291906200041d565b5080600490805190602001906200006a9291906200041d565b5050506200008d62000081620000fd60201b60201c565b6200010560201b60201c565b620000a93369d3c21bcecceda1000000620001cb60201b60201c565b620000f56040518060400160405280600681526020017f53656e6465720000000000000000000000000000000000000000000000000000815250336200034460201b620009651760201c565b50506200092e565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156200023e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002359062000670565b60405180910390fd5b6200025260008383620003ea60201b60201c565b80600260008282546200026691906200072a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254620002bd91906200072a565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405162000324919062000692565b60405180910390a36200034060008383620003ef60201b60201c565b5050565b620003e682826040516024016200035d9291906200063c565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050620003f460201b60201c565b5050565b505050565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b8280546200042b90620007fb565b90600052602060002090601f0160209004810192826200044f57600085556200049b565b82601f106200046a57805160ff19168380011785556200049b565b828001600101855582156200049b579182015b828111156200049a5782518255916020019190600101906200047d565b5b509050620004aa9190620004ae565b5090565b5b80821115620004c9576000816000905550600101620004af565b5090565b6000620004e4620004de84620006d8565b620006af565b905082815260208101848484011115620004fd57600080fd5b6200050a848285620007c5565b509392505050565b600082601f8301126200052457600080fd5b815162000536848260208601620004cd565b91505092915050565b600080604083850312156200055357600080fd5b600083015167ffffffffffffffff8111156200056e57600080fd5b6200057c8582860162000512565b925050602083015167ffffffffffffffff8111156200059a57600080fd5b620005a88582860162000512565b9150509250929050565b620005bd8162000787565b82525050565b6000620005d0826200070e565b620005dc818562000719565b9350620005ee818560208601620007c5565b620005f981620008f4565b840191505092915050565b600062000613601f8362000719565b9150620006208262000905565b602082019050919050565b6200063681620007bb565b82525050565b60006040820190508181036000830152620006588185620005c3565b9050620006696020830184620005b2565b9392505050565b600060208201905081810360008301526200068b8162000604565b9050919050565b6000602082019050620006a960008301846200062b565b92915050565b6000620006bb620006ce565b9050620006c9828262000831565b919050565b6000604051905090565b600067ffffffffffffffff821115620006f657620006f5620008c5565b5b6200070182620008f4565b9050602081019050919050565b600081519050919050565b600082825260208201905092915050565b60006200073782620007bb565b91506200074483620007bb565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156200077c576200077b62000867565b5b828201905092915050565b600062000794826200079b565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b83811015620007e5578082015181840152602081019050620007c8565b83811115620007f5576000848401525b50505050565b600060028204905060018216806200081457607f821691505b602082108114156200082b576200082a62000896565b5b50919050565b6200083c82620008f4565b810181811067ffffffffffffffff821117156200085e576200085d620008c5565b5b80604052505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611ac8806200093e6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f919061145d565b60405180910390f35b610132600480360381019061012d9190611218565b6103b4565b60405161013f9190611442565b60405180910390f35b6101506103d7565b60405161015d91906115ef565b60405180910390f35b610180600480360381019061017b91906111c9565b6103e1565b60405161018d9190611442565b60405180910390f35b61019e610410565b6040516101ab919061160a565b60405180910390f35b6101ce60048036038101906101c99190611218565b610419565b6040516101db9190611442565b60405180910390f35b6101fe60048036038101906101f99190611218565b6104c3565b005b61021a60048036038101906102159190611164565b61054d565b60405161022791906115ef565b60405180910390f35b610238610595565b005b61024261061d565b60405161024f9190611427565b60405180910390f35b610260610647565b60405161026d919061145d565b60405180910390f35b610290600480360381019061028b9190611218565b6106d9565b60405161029d9190611442565b60405180910390f35b6102c060048036038101906102bb9190611218565b6107c3565b6040516102cd9190611442565b60405180910390f35b6102f060048036038101906102eb919061118d565b6107e6565b6040516102fd91906115ef565b60405180910390f35b610320600480360381019061031b9190611164565b61086d565b005b6060600380546103319061171f565b80601f016020809104026020016040519081016040528092919081815260200182805461035d9061171f565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610a01565b90506103cc818585610a09565b600191505092915050565b6000600254905090565b6000806103ec610a01565b90506103f9858285610bd4565b610404858585610c60565b60019150509392505050565b60006012905090565b600080610424610a01565b90506104b8818585600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546104b39190611641565b610a09565b600191505092915050565b6104cb610a01565b73ffffffffffffffffffffffffffffffffffffffff166104e961061d565b73ffffffffffffffffffffffffffffffffffffffff161461053f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105369061154f565b60405180910390fd5b6105498282610ee1565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b61059d610a01565b73ffffffffffffffffffffffffffffffffffffffff166105bb61061d565b73ffffffffffffffffffffffffffffffffffffffff1614610611576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106089061154f565b60405180910390fd5b61061b6000611041565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546106569061171f565b80601f01602080910402602001604051908101604052809291908181526020018280546106829061171f565b80156106cf5780601f106106a4576101008083540402835291602001916106cf565b820191906000526020600020905b8154815290600101906020018083116106b257829003601f168201915b5050505050905090565b6000806106e4610a01565b90506000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050838110156107aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a1906115af565b60405180910390fd5b6107b78286868403610a09565b60019250505092915050565b6000806107ce610a01565b90506107db818585610c60565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b610875610a01565b73ffffffffffffffffffffffffffffffffffffffff1661089361061d565b73ffffffffffffffffffffffffffffffffffffffff16146108e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108e09061154f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610959576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610950906114cf565b60405180910390fd5b61096281611041565b50565b6109fd828260405160240161097b92919061147f565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611107565b5050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610a79576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a709061158f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610ae9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae0906114ef565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92583604051610bc791906115ef565b60405180910390a3505050565b6000610be084846107e6565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8114610c5a5781811015610c4c576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c439061150f565b60405180910390fd5b610c598484848403610a09565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610cd0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cc79061156f565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d40576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d37906114af565b60405180910390fd5b610d4b838383611130565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610dd1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc89061152f565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610e649190611641565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610ec891906115ef565b60405180910390a3610edb848484611135565b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610f51576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f48906115cf565b60405180910390fd5b610f5d60008383611130565b8060026000828254610f6f9190611641565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610fc49190611641565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef8360405161102991906115ef565b60405180910390a361103d60008383611135565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b505050565b505050565b60008135905061114981611a64565b92915050565b60008135905061115e81611a7b565b92915050565b60006020828403121561117657600080fd5b60006111848482850161113a565b91505092915050565b600080604083850312156111a057600080fd5b60006111ae8582860161113a565b92505060206111bf8582860161113a565b9150509250929050565b6000806000606084860312156111de57600080fd5b60006111ec8682870161113a565b93505060206111fd8682870161113a565b925050604061120e8682870161114f565b9150509250925092565b6000806040838503121561122b57600080fd5b60006112398582860161113a565b925050602061124a8582860161114f565b9150509250929050565b61125d81611697565b82525050565b61126c816116a9565b82525050565b600061127d82611625565b6112878185611630565b93506112978185602086016116ec565b6112a0816117af565b840191505092915050565b60006112b8602383611630565b91506112c3826117c0565b604082019050919050565b60006112db602683611630565b91506112e68261180f565b604082019050919050565b60006112fe602283611630565b91506113098261185e565b604082019050919050565b6000611321601d83611630565b915061132c826118ad565b602082019050919050565b6000611344602683611630565b915061134f826118d6565b604082019050919050565b6000611367602083611630565b915061137282611925565b602082019050919050565b600061138a602583611630565b91506113958261194e565b604082019050919050565b60006113ad602483611630565b91506113b88261199d565b604082019050919050565b60006113d0602583611630565b91506113db826119ec565b604082019050919050565b60006113f3601f83611630565b91506113fe82611a3b565b602082019050919050565b611412816116d5565b82525050565b611421816116df565b82525050565b600060208201905061143c6000830184611254565b92915050565b60006020820190506114576000830184611263565b92915050565b600060208201905081810360008301526114778184611272565b905092915050565b600060408201905081810360008301526114998185611272565b90506114a86020830184611254565b9392505050565b600060208201905081810360008301526114c8816112ab565b9050919050565b600060208201905081810360008301526114e8816112ce565b9050919050565b60006020820190508181036000830152611508816112f1565b9050919050565b6000602082019050818103600083015261152881611314565b9050919050565b6000602082019050818103600083015261154881611337565b9050919050565b600060208201905081810360008301526115688161135a565b9050919050565b600060208201905081810360008301526115888161137d565b9050919050565b600060208201905081810360008301526115a8816113a0565b9050919050565b600060208201905081810360008301526115c8816113c3565b9050919050565b600060208201905081810360008301526115e8816113e6565b9050919050565b60006020820190506116046000830184611409565b92915050565b600060208201905061161f6000830184611418565b92915050565b600081519050919050565b600082825260208201905092915050565b600061164c826116d5565b9150611657836116d5565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561168c5761168b611751565b5b828201905092915050565b60006116a2826116b5565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b8381101561170a5780820151818401526020810190506116ef565b83811115611719576000848401525b50505050565b6000600282049050600182168061173757607f821691505b6020821081141561174b5761174a611780565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b611a6d81611697565b8114611a7857600080fd5b50565b611a84816116d5565b8114611a8f57600080fd5b5056fea2646970667358221220dbbe69a47c19359d86de7893730cc9680118710eade293a8c6c66440d5cb7aaf64736f6c63430008040033";

type MyNFTTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyNFTTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyNFTToken__factory extends ContractFactory {
  constructor(...args: MyNFTTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyNFTToken> {
    return super.deploy(name, symbol, overrides || {}) as Promise<MyNFTToken>;
  }
  override getDeployTransaction(
    name: string,
    symbol: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, overrides || {});
  }
  override attach(address: string): MyNFTToken {
    return super.attach(address) as MyNFTToken;
  }
  override connect(signer: Signer): MyNFTToken__factory {
    return super.connect(signer) as MyNFTToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyNFTTokenInterface {
    return new utils.Interface(_abi) as MyNFTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyNFTToken {
    return new Contract(address, _abi, signerOrProvider) as MyNFTToken;
  }
}
