import _ from "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import { expect } from "chai";

describe("Hero", () => {
      async function createHero(){
          const Hero = await ethers.getContractFactory("TestHero");
            const hero = await Hero.deploy();
            await hero.deployed();
            return hero;
      }
      let hero;
        before(async () => {
            hero = await createHero();
      
        })

        it("It should get a zero hero array", async () => { 
            expect(await hero.getHeros()).to.deep.equal([]);
        })

        it("it should fail when at creating hero beacuse of payment", async () => {
            // let e;
            // try{
        //    const hero =await createHero()

        //         await hero.createHero(0,{
        //             value: ethers.utils.parseEther("0.056767"),
        //     //       });
        //     // }catch(err){
        //     //     e = err;
        //     // }
        //     // expect(e.message.includes("PLease send more Money")).to.equal(true);
        // })

        await hero.setRandom(69);
        await hero.createHero(0,{
            value: ethers.utils.parseEther("0.056767"),
        })[0];
        const h=(await hero.getHeros())[0];
        console.log(h)
        expect(await hero.getMagic(h)).to.equal(10);

    })});
