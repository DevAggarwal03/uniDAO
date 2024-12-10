import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  lightTheme,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  lineaSepolia,
  lineaTestnet,
  sepolia,
  base,
  mantleSepoliaTestnet,
} from 'wagmi/chains';
import { openCodexTestnet } from './ChainConfig';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import React from 'react';


const config = getDefaultConfig({
  appName: 'NeoX',
  projectId: '121',
  chains: [sepolia,base,openCodexTestnet ,lineaSepolia,lineaTestnet, mantleSepoliaTestnet],
  ssr: false,
});

const queryClient = new QueryClient();
const WalletProvider = ({children} : {children : React.ReactNode}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme({borderRadius: 'medium', overlayBlur: 'none'})}>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WalletProvider;