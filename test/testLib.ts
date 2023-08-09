import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyContract", function () {
  async function deployContracts() {
    const [owner] = await ethers.getSigners();

    // Deploying LibraryA
    const SetVarsContract = await ethers.getContractFactory("SetVarsContract");
    const setVarsContract = await SetVarsContract.deploy();
    const addrSetVarsContract = await setVarsContract.getAddress();

    // Deploying MyContract with the addresses of the libraries
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy(addrSetVarsContract);

    return { myContract };
  }

  describe("Variables Manipulation", function () {
    it("Should set variables a to 3", async function () {
      const { myContract } = await deployContracts();

      expect(await myContract.num()).to.equal(0);

      await myContract.setVars(3);

      expect(await myContract.num()).to.equal(3);
    });
  });
});
