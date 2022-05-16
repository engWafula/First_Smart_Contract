import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy(){
    const HelloWord = await ethers.getContractFactory("HelloWorld");
    const hello = await HelloWord.deploy();
    return hello;
}
//@ts-ignore
async function  sayHello(hello) {
    console.log("Say Hello",await hello.hello());
}

deploy().then(sayHello);