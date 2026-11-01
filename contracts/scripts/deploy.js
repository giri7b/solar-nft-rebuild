const hre = require("hardhat");

async function main() {
  const SolarPanelNFT = await hre.ethers.getContractFactory("SolarPanelNFT");
  const contract = await SolarPanelNFT.deploy();

  await contract.waitForDeployment();

  console.log("SolarPanelNFT deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});