const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Task2-Test", function () {
    async function deployTokenFixture() {
        const Task2_ScoreStorage = await ethers.getContractFactory("Task2_ScoreStorage");
        const Task2_ScoreV1 = await ethers.getContractFactory("Task2_ScoreV1");
        const Task2_ScoreV2 = await ethers.getContractFactory("Task2_ScoreV2");

        //ScoreStorage Deploy
        const ScoreStorage = await Task2_ScoreStorage.deploy();
        await ScoreStorage.deployed();
        //ScoreStorage Contract Address
        const ScoreStorageAddress = ScoreStorage.deployTransaction.creates;     
    
        //ScoreV1 Deploy
        const ScoreV1 = await Task2_ScoreV1.deploy(ScoreStorageAddress);
        await ScoreV1.deployed();

        // ScoreV2 Deploy
        const ScoreV2 = await Task2_ScoreV2.deploy(ScoreStorageAddress);
        await ScoreV2.deployed();        

        // Fixtures can return anything you consider useful for your tests
        return { ScoreV1, ScoreV2, Task2_ScoreStorage, ScoreStorage, ScoreStorageAddress };
      }


    it("setScore", async function () {
        const {ScoreV1, ScoreV2} = await loadFixture(deployTokenFixture);
        console.log("SetScoreV1: 5");
        await ScoreV1.incrementScore(5);
        console.log("get ScoreV2:", await ScoreV2.getScore());
        expect(await ScoreV1.getScore()).to.equal(5);

        console.log("SetScoreV2: 5");
        await ScoreV2.incrementScore();
        expect(await ScoreV2.getScore()).to.equal(6);
        console.log("Get ScoreV2: ",await ScoreV2.getScore());
        
    });
  })


