export const networks = [
  { id: 1, label: "Mainnet" },
  { id: 3, label: "Ropsten" },
  { id: 4, label: "Rinkeby" },
  { id: 42, label: "Kovan" },
  { id: 69, label: "Optimism Kovan" },
];

export const networkParams = {
  "0x45": {
    chainId: "0x45",
    rpcUrls: [
      process.env.INFURA_KEY
        ? `https://optimism-kovan.infura.io/v3/${process.env.INFURA_KEY}`
        : "",
      "https://kovan.optimism.io",
    ].filter((url) => url !== ""),
    chainName: "Optimism Kovan",
    nativeCurrency: { name: "KOR", decimals: 18, symbol: "KOR" },
    blockExplorerUrls: ["https://kovan-optimistic.etherscan.io/"],
    iconUrls: [
      "https://assets-global.website-files.com/611dbb3c82ba72fbc285d4e2/611fd32ef63b79b5f8568d58_OPTIMISM-logo.svg",
    ],
  },
};
