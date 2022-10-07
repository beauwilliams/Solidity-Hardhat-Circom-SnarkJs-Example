/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface ExampleImplementationInterface extends utils.Interface {
  functions: {
    "isPreImage(uint256[2],uint256[2],uint256[2],uint256[2],uint256[1])": FunctionFragment;
    "verifyProof(uint256[2],uint256[2][2],uint256[2],uint256[1])": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "isPreImage" | "verifyProof"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "isPreImage",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>]
    ]
  ): string;

  decodeFunctionResult(functionFragment: "isPreImage", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;

  events: {};
}

export interface ExampleImplementation extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExampleImplementationInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    isPreImage(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_1: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<[boolean] & { r: boolean }>;
  };

  isPreImage(
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b_0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b_1: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    input: [PromiseOrValue<BigNumberish>],
    overrides?: CallOverrides
  ): Promise<boolean>;

  verifyProof(
    a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    b: [
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
    ],
    c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
    input: [PromiseOrValue<BigNumberish>],
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    isPreImage(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_1: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    isPreImage(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_1: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    isPreImage(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_0: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b_1: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    verifyProof(
      a: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      b: [
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
        [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
      ],
      c: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>],
      input: [PromiseOrValue<BigNumberish>],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}