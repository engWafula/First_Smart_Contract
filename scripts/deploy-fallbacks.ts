import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";

async function deploy(name,...args) {
    const Fallback = await ethers.getContractFactory(name);
    const fallback=await Fallback.deploy(...args);
    await fallback.deployed();
    console.log(fallback.address)
    return fallback;
}

async function fallback() {
    const a =await deploy("A");
    const b=await deploy("B",a.address);

    console.log("A", await a.getA());
    console.log("B",await b.getB());
    console.log("...............................")


    await a.setA(59)
    console.log("A", await a.getA());
    console.log("B",await b.getB());



    await b.setB(100)
    console.log("A", await a.getA());
    console.log("B",await b.getB());
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