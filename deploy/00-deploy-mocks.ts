import { HardhatRuntimeEnvironment } from "hardhat/types"
import { developmentChains } from "../helper-hardhat-config";

const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000;

const deployMocks = async ({deployments, network, getNamedAccounts}: HardhatRuntimeEnvironment) => {
    const {deploy, log} = deployments;
    const {deployer} = await getNamedAccounts();

    if(developmentChains.includes(network.name)) {
        log("Local network detected! Deploying Mocks...")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [
                DECIMALS, INITIAL_ANSWER
            ]
        })
    }
}

export default deployMocks
deployMocks.tags = ["all", "mocks"]
