const { ethers } = require("hardhat")

async function mintAndList() {
    const nftMarketplace = await ethers.getContract("NftMarketplace")
    const randomNumber = Math.floor(Math.random() * 2)
    const basicNft = await ethers.getContract("BasicNft")
    // if (randomNumber == 1) {
    //     basicNft = await ethers.getContract("BasicNftTwo")
    // } else {
    //     basicNft = await ethers.getContract("BasicNft")
    // }
    console.log("Minting NFT ...")
    const mintTx = await basicNft.mintNft()
    const mintTxReceipt = await mintTx.wait(1)
    const tokenId = mintTxReceipt.events[0].args.tokenId
    console.log("Approving NFT...")
}
