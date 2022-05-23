pragma solidity^0.8.0;
import "hardhat/console.sol";


contract A{
    uint a;
    function setA(uint _a) public{
        a=_a;
    }

    function getA() public view returns (uint){
        return a;
    }
}


contract B{
    uint b;
    uint8 c;
    uint8 d;
    address contractA;

    constructor(address _A){
        contractA=_A;
        b=14;
        c=0x45;
        d=0xF5;
    }


    function setB(uint _b) public{
        b=_b;
        // A(contractA).setA(_a+1);

        //Here we use a delegate call to implement the same functionality

      (bool success, bytes memory bb) =contractA.delegatecall(
    abi.encodeWithSignature("getA(uint256)",_b+1)
);
    }

    function getB() public view returns (uint){
        return b;
    }
}