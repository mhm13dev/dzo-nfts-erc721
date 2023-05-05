import { ethers } from "hardhat";
import { tokenUris } from "../metadata";

const addresses = {
  97: {
    DZO: "0xf68be30be5ced7e4b7e0a345a6fd7bfe542307e1",
    receiver: "0x4EE163a06a2deE907ff6b594F8e393e9fDC75bf3",
  },
  56: {
    DZO: "0x7A523F5AF707d6829Fad0FAcA5151815477Ce0DB",
    receiver: "0x9972EA2288e4024CAd232532A35756eDDb29288d",
  },
};

async function main() {
  const DZOFactory = await ethers.getContractFactory("DZO");

  const network = await ethers.provider.getNetwork();

  const DZO = DZOFactory.attach(
    addresses[network.chainId as keyof typeof addresses].DZO
  );

  for (let i = 0; i < 6; i++) {
    await DZO.mint(
      addresses[network.chainId as keyof typeof addresses].receiver,
      tokenUris[i as keyof typeof tokenUris]
    );
  }

  console.log(`NFTs minted`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
