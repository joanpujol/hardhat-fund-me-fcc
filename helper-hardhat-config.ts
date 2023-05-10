export interface networkConfigItem {
    name: string
    ethUsdPriceFeed?: string
  }
  
  export interface networkConfigInfo {
    [key: number]: networkConfigItem
  }
  
  export const networkConfig: networkConfigInfo = {
    // Price Feed Address, values can be obtained at https://docs.chain.link/data-feeds/price-feeds/addresses
    // Default one is ETH/USD contract on Sepolia
    11155111: {
      name: "sepolia",
      ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
    },
  }


export const developmentChains = ["hardhat", "localhost"]
