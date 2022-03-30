/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace Employees {
  export type EmployeeStruct = {
    id: BigNumberish;
    name: string;
    age: BigNumberish;
    city: string;
    note: string;
  };

  export type EmployeeStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string,
    string
  ] & {
    id: BigNumber;
    name: string;
    age: BigNumber;
    city: string;
    note: string;
  };
}

export interface EmployeesInterface extends utils.Interface {
  functions: {
    "add(uint256,string,string,string)": FunctionFragment;
    "getCount()": FunctionFragment;
    "getEmployees()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "add" | "getCount" | "getEmployees"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "add",
    values: [BigNumberish, string, string, string]
  ): string;
  encodeFunctionData(functionFragment: "getCount", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getEmployees",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getCount", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getEmployees",
    data: BytesLike
  ): Result;

  events: {
    "Created(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Created"): EventFragment;
}

export interface CreatedEventObject {
  id: BigNumber;
}
export type CreatedEvent = TypedEvent<[BigNumber], CreatedEventObject>;

export type CreatedEventFilter = TypedEventFilter<CreatedEvent>;

export interface Employees extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EmployeesInterface;

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
    add(
      age: BigNumberish,
      city: string,
      name: string,
      note: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getCount(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { count: BigNumber }>;

    getEmployees(
      overrides?: CallOverrides
    ): Promise<
      [Employees.EmployeeStructOutput[]] & {
        values: Employees.EmployeeStructOutput[];
      }
    >;
  };

  add(
    age: BigNumberish,
    city: string,
    name: string,
    note: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getCount(overrides?: CallOverrides): Promise<BigNumber>;

  getEmployees(
    overrides?: CallOverrides
  ): Promise<Employees.EmployeeStructOutput[]>;

  callStatic: {
    add(
      age: BigNumberish,
      city: string,
      name: string,
      note: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    getEmployees(
      overrides?: CallOverrides
    ): Promise<Employees.EmployeeStructOutput[]>;
  };

  filters: {
    "Created(uint256)"(id?: null): CreatedEventFilter;
    Created(id?: null): CreatedEventFilter;
  };

  estimateGas: {
    add(
      age: BigNumberish,
      city: string,
      name: string,
      note: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getCount(overrides?: CallOverrides): Promise<BigNumber>;

    getEmployees(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      age: BigNumberish,
      city: string,
      name: string,
      note: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getEmployees(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
