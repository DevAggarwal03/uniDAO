import { defineChain } from "viem";

export const openCodexTestnet = /*#__PURE__*/ defineChain({
  id: 656476,
  name: 'OpenCodex',
  nativeCurrency: { name: 'Open Campus EDU', symbol: 'EDU', decimals: 18 },
  rpcUrls: {
    default: {
      http: ['https://rpc.open-campus-codex.gelato.digital']
    },
  },
  blockExplorers: {
    default: {
      name: 'Etherscan',
      url: 'https://opencampus-codex.blockscout.com'
    },
  },
  testnet: true,
})
