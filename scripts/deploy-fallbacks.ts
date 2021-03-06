import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy(name,...args) {
    const Fallback = await ethers.getContractFactory(name);
    const fallback=await Fallback.deploy(...args);
    await fallback.deployed();
    console.log(fallback.address)
    return fallback;
}

async function printStorage(contract,name,count){
    for(let i=0;i<count;i++){
        console.log(name,i,await ethers.provider.getStorageAt(contract.address,i));
    }
}


async function fallback() {
    const a =await deploy("A");
    const b=await deploy("B",a.address);

    // console.log("A", await a.getA());
    // console.log("B",await b.getB());
    // console.log("...............................")


    // await a.setA(59)
    // console.log("A", await a.getA());
    // console.log("B",await b.getB());


    // console.log("...............................")
    // await b.setB(100)
    // console.log("A", await a.getA());
    // console.log("B",await b.getB());

    await printStorage(b,"B",3);
}
    fallback();


// class Foo{
//     private bar:number;
//  foo(){
//    console.log("foo",this.bar);
//     }
// }

// const foo = new Foo();

// foo.foo();

// foo.foo.call({
//     bar:10
// })