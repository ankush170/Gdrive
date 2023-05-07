// We require the Hardhat Runtime Environment explicitly here. This is optional
const hre = require("hardhat");

async function main() {
  const Gdrive = await hre.ethers.getContractFactory("Gdrive");
  const gdrive = await Gdrive.deploy();

  await gdrive.deployed();

  console.log("Library deployed to:", gdrive.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
})
//0x5FbDB2315678afecb367f032d93F642f64180aa3
