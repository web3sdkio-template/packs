import { Web3sdkioSDK } from "@web3sdkio/sdk";
import dotenv from "dotenv";
dotenv.config();

(async () => {
  const sdk = Web3sdkioSDK.fromPrivateKey(process.env.PRIVATE_KEY, "mumbai");

  const pack = await sdk.getContract(
    "0x0Aee160411473f63be2DfF2865E81A1D59636C97",
    'pack',
  );

  const packNfts = await pack.getAll();

  console.log(packNfts);
})();
