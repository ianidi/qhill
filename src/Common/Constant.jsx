export const networks = [
  { id: 1, label: "Mainnet" },
  { id: 3, label: "Ropsten" },
  { id: 4, label: "Rinkeby" },
  { id: 42, label: "Kovan" },
  { id: 69, label: "Optimism Kovan (testnet)" },
];

export const networkParams = {
  "0x45": {
    chainId: "0x45",
    rpcUrls: ["https://kovan.optimism.io"],
    chainName: "Optimism Kovan",
    nativeCurrency: { name: "ETH", decimals: 18, symbol: "ETH" },
    blockExplorerUrls: ["https://kovan-optimistic.etherscan.io/"],
    iconUrls: [
      "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/611fd32ef63b79b5f8568d58_OPTIMISM-logo.svg",
    ],
  },
};
