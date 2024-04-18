<script setup>
  import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
  bsc
} from 'wagmi/chains';
import {
  // QueryClientProvider,
  QueryClient,
} from "@tanstack/vue-query";
const queryClient = new QueryClient();
const config = getDefaultConfig({
  appName: 'Compad | Private Presale',
  // url:'http://localhost:3000',
  projectId: '064d0a124217d401cda6999baf496215',
  chains: [mainnet, polygon, optimism, arbitrum, base, bsc],
  ssr: true, // If your dApp uses server side rendering (SSR)
});
</script>
<template>
  <section>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <NuxtPage/>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </section>
</template>
