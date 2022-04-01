
const { ethers } = require("hardhat");


async function main() {
  const CryptoBeetles = await ethers.getContractFactory("CryptoBeetles");
  const cryptoBeetles = await CryptoBeetles.deploy("CryptoBeetles", "CBEET");

  
    await cryptoBeetles.deployed();
    console.log('CryptoBeetles deployed to: ', cryptoBeetles.address);
    
    const newItemId = await cryptoBeetles.mint("https://ipfs.io/ipfs/QmZHEfbXMERkoa2dhbPsUHCG3YmnyHsH7D5YZVug3nVKBE")
    console.log('NFT minted successfully: ', newItemId)

 
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
