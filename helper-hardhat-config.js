const networkConfig = {
    default: {
        name: "hardhat",
        subscriptionId: "8628",
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        keepersUpdateInterval: "30",
        mintFee: "10000000000000000", // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
    },
    31337: {
        name: "localhost",
        subscriptionId: "8628",
        ethUsdPriceFeed: "0x9326BFA02ADD2366b30bacB125260Af641031331",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc", // 30 gwei
        keepersUpdateInterval: "30",
        mintFee: "10000000000000000", // 0.01 ETH
        callbackGasLimit: "500000", // 500,000 gas
        blockConfirmations: 6,
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    // Default one is ETH/USD contract on Kovan
    4: {
        name: "rinkeby",
        ethUsdPriceFeed: "0x8A753747A1Fa494EC906cE90E9f37563A8AF630e",
        vrfCoordinatorV2: "0x6168499c0cFfCaCD319c818142124B7A15E857ab",
        gasLane: "0xd89b2bf150e3b9e13446986e571fb9cab24b13cea0a43ea20a6049a85cc807cc",
        callbackGasLimit: "500000", // 500,000 gas
        mintFee: "10000000000000000", // 0.01 ETH
        subscriptionId: "8628", // add your ID here!
        blockConfirmations: 6,
    },
    1: {
        name: "mainnet",
        subscriptionId: "8628",
        keepersUpdateInterval: "30",
        blockConfirmations: 6,
    },
}

const DECIMALS = "18"
const INITIAL_PRICE = "200000000000000000000"
const developmentChains = ["hardhat", "localhost"]
const frontEndContractsFile = "../nextjs-nft-marketplace-moralis-fcc/constants/networkMapping.json"
const frontEndContractsFile2 =
    "../nextjs-nft-marketplace-thegraph-fcc/constants/networkMapping.json"
const frontEndAbiLocation = "../nextjs-nft-marketplace-moralis-fcc/constants/"
const frontEndAbiLocation2 = "../nextjs-nft-marketplace-thegraph-fcc/constants/"

module.exports = {
    networkConfig,
    developmentChains,
    frontEndContractsFile,
    frontEndContractsFile2,
    frontEndAbiLocation,
    frontEndAbiLocation2,
}
