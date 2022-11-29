import type { AppProps } from "next/app";
import { ChainId, Web3sdkioProvider } from "@web3sdkio/react";
import "../styles/globals.css";
import Web3sdkioGuideFooter from "../components/Web3sdkioGuideFooter";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3sdkioProvider desiredChainId={activeChainId}>
      <Component {...pageProps} />
      <Web3sdkioGuideFooter />
    </Web3sdkioProvider>
  );
}

export default MyApp;
