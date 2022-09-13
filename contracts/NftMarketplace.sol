// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

error NftMarketplace__PriceMustBeAboveZero();

contract NftMarketplace is ReentrancyGuard {
    struct Listing {
        uint256 price;
        address seller;
    }

    mapping(address => mapping(uint256 => Listing)) private s_listings;
    mapping(address => uint256) private s_proceeds;

    // Main functions
    function listItem(address nftAddress, uint256 tokenId, uint256 price)external{
        if(price <= 0) {
            revert NftMarketplace__PriceMustBeAboveZero(); 
        }
        // 1. Send the NFT to the  contract, Transfer -> Contract "hold" the NFT. ❎  OR 
        // 2. Owners can still hold their NFT, and give the marketplace approval to sell the NFT for them. ✅
        IERC721 nft = IERC721(nftAddress);
    }
}