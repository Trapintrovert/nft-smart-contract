const { ethers } = require("hardhat");
const cryptoBeetlesJSON = require('../artifacts/contracts/CryptoBeetles.sol/CryptoBeetles.json');

async function main() {
  const abi = cryptoBeetlesJSON.abi;
  const provider = new ethers.providers.InfuraProvider('rinkeby', process.env.RINKEBY_PROJECT_ID);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const signer = wallet.connect(provider);
  const cryptoBeetles = new ethers.Contract(process.env.CONTRACT_ADDRESS, abi, signer);
  await cryptoBeetles.mint("https://ipfs.io/ipfs/QmPHLAKRPcGeBHQtDjuAjBv76puUnADkiF2HxRw2156MKc");

  console.log('NFT minted successfully: ');
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
