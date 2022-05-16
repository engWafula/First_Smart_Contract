import "@nomiclabs/hardhat-ethers"
import { ethers } from "hardhat"
import { expect } from "chai"

describe('HelloWorld', function() {

    it("should say hello", async  function(){
    const HelloWorld= await ethers.getContractFactory("HelloWorld");
    const Hello=await HelloWorld.deploy();
    await Hello.deployed();
    });
});