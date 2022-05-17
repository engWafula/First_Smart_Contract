import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy() {
    const C = await ethers.getContractFactory("Counter");
    const counter=await C.deploy();
    await counter.deployed();

    return counter
}

async function count(counter) {
    console.log("Counter",await counter.count());
}
    
deploy().then(count);
