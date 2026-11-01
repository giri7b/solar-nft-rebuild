const hre = require("hardhat");

async function main() {
  const network = await hre.ethers.provider.getNetwork();
  const block = await hre.ethers.provider.getBlockNumber();
  console.log("Chain ID:", network.chainId.toString());
  console.log("Latest block:", block);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});