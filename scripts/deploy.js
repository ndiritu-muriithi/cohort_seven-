const hre = require ("hardhat");

async function main(params) {
    await hre.run('compile');

    const Lock = await hre.ethers.getContractFactory("Lock");
    const lock = await Lock.deploy();
    await lock.waitForDeployment();

    console.log("lock Contracrt address" , await lock.getAddress());
    
}
main().then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
    });