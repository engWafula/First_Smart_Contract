// SPDX-License-Identifier: MIT

pragma solidity^0.8.0;
import "hardhat/console.sol";

import  "./Storage.sol";


contract A{

    AppStorage s;

    uint a;
    function setA(uint _a) public{
        s.a=_a;
    }

    function getA() public view returns (uint){
        return s.a;
    }
}


contract B{
    // uint b;
    // uint8 c;
    // uint8 d;
    // address contractA;

    AppStorage s;

    constructor(address _A){
        s.contractA=_A;
        s.b=14;
        s.c=0x45;
    
    }


    function setB(uint _b) public{
        s.b=_b;
        // A(contractA).setA(_a+1);

        //Here we use a delegate call to implement the same functionality

      (bool success, bytes memory bb) =s.contractA.delegatecall(
    abi.encodeWithSignature("getA(uint256)",_b+1)
);
    }

    function getB() public view returns (uint){
        return s.b;
    }
}