import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains, networkConfig } from "../helper-hardhat-config";

export default async ({deployments, network, getNamedAccounts}: HardhatRuntimeEnvironment) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();
    const chainId = network.config.chainId ?? 0;

    let ethUsdPriceFeedAddress;

if(developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
} else {
    ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed;
}
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUsdPriceFeedAddress],
        log: true,
    });
}
 