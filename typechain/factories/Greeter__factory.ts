/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { Greeter, GreeterInterface } from "../Greeter";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "greet",
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
    inputs: [
      {
        internalType: "string",
        name: "_greeting",
        type: "string",
      },
    ],
    name: "setGreeting",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60566050600b82828239805160001a6073146043577f4e487b7100000000000000000000000000000000000000000000000000000000600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600080fdfea26469706673582212208baa10693da20131556c3bb1fff052e6d603878927d4fd26bb5150ea537a71bf64736f6c63430008040033";

export class Greeter__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Greeter> {
    return super.deploy(_greeting, overrides || {}) as Promise<Greeter>;
  }
  getDeployTransaction(
    _greeting: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_greeting, overrides || {});
  }
  attach(address: string): Greeter {
    return super.attach(address) as Greeter;
  }
  connect(signer: Signer): Greeter__factory {
    return super.connect(signer) as Greeter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GreeterInterface {
    return new utils.Interface(_abi) as GreeterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Greeter {
    return new Contract(address, _abi, signerOrProvider) as Greeter;
  }
}
