const { expect } = require("chai");
const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");

describe("Task4-Test", function () {
    async function deployTokenFixture() {
        const Task4_Proxy = await ethers.getContractFactory("Task4_Proxy");
        const Task4_ProxyStorage = await ethers.getContractFactory("Task4_ProxyStorage");
        const Task4_ScoreStorage = await ethers.getContractFactory("Task4_ScoreStorage");
        const Task4_ScoreV1 = await ethers.getContractFactory("Task4_ScoreV1");
        const Task4_ScoreV2 = await ethers.getContractFactory("Task4_ScoreV2");



        // //Task4_ProxyStorage Deploy
        // const ProxyStorage = await Task4_ProxyStorage.deploy();
        // await ProxyStorage.deployed();

        //ScoreStorage Deploy
        const ScoreStorage = await Task4_ScoreStorage.deploy();
        await ScoreStorage.deployed();
    
        //ScoreV1 Deploy
        const ScoreV1 = await Task4_ScoreV1.deploy();
        await ScoreV1.deployed();
        //V1 Contract Address
        const ScoreV1Address = await ScoreV1.deployTransaction.creates;
        
        // ScoreV2 Deploy
        const ScoreV2 = await Task4_ScoreV2.deploy();
        await ScoreV2.deployed();
        //V2 Contract Address
        const ScoreV2Address = await ScoreV2.deployTransaction.creates; 
        
        //Proxy Deploy
        const Proxy = await Task4_Proxy.deploy(ScoreV1Address);
        await Proxy.deployed(ScoreV1Address);


        // Fixtures can return anything you consider useful for your tests
        return { ScoreV1, ScoreV2, Proxy,ScoreV2Address };
      }

      it("SetScoreV1", async function() {
        const {ScoreV1} = await loadFixture(deployTokenFixture);

        //SetScoreV1(10)
        await ScoreV1.setScore(10);
        
        //Check ScoreStorage and Compare to 10
        console.log("Get ScoreV1: ", await ScoreV1.getScore());
        expect(await ScoreV1.getScore()).to.equal(10);
      })

      it("SetScoreV2", async function() {
        const {ScoreV2, Proxy,ScoreV2Address} = await loadFixture(deployTokenFixture);  

        await Proxy.setImplementation(ScoreV2Address);

        //SetScoreV2(10)
        await ScoreV2.setScore(10);
        
        //Check ScoreStorage and Compare to 11
        console.log("Get ScoreV2: ", await ScoreV2.getScore());
        expect(await ScoreV2.getScore()).to.equal(11);
      })


  })

