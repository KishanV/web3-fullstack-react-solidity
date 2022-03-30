import { Web3Handler } from "../web3.handler";
import { MyNFTTokenFactory } from "../../contracts/MyNFTFactory.sol";
import { MyNFTTokenFactory__factory } from "../../contracts/factories/MyNFTFactory.sol";

const ADDRESS = process.env.REACT_APP_MY_NFT_ADDRESS as string;

const win = window as any;
class MyNFT3FactoryHandler extends Web3Handler<MyNFTTokenFactory> {
  async getNFTs() {
    const data = await this.contract.queryFilter(
      this.contract.filters.NftCreated()
    );
    const list = data.map((item: any) => {
      return this.contract.getNFTDetails(item.returnValues.tokenAddress);
    });
    return Promise.all(list);
  }

  async addNFT(data: any): Promise<any> {
    return this.contract.createNft(data.name, data.symbol, data.color);
  }
}

export default new MyNFT3FactoryHandler(MyNFTTokenFactory__factory, ADDRESS);
