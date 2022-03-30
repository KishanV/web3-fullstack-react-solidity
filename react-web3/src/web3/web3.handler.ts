import Web3 from "web3";
import { providers } from "ethers";

const win = window as any;

class Web3Handler<T> {
  contract: T = undefined as any;
  signer?: any;
  factory?: any;
  address?: string;

  constructor(factory: any, address: string) {
    this.factory = factory;
    this.address = address;
  }

  load() {
    const provider = new providers.Web3Provider(win.ethereum, "any");
    this.signer = provider.getSigner();
    this.contract = this.factory.connect(this.address as any, this.signer);
  }
}

export { Web3Handler };
