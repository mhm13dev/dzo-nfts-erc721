import { ethers } from "hardhat";

async function main() {
  const DZOFactory = await ethers.getContractFactory("DZO");
  const DZO = await DZOFactory.deploy();

  await DZO.deployed();

  console.log(`DZO deployed to ${DZO.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
