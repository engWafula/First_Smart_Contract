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
    uint a;
    address contractA;

    constructor(address _A){
        contractA=_A;
    }


    function setB(uint _a) public{
        a=_a;
        A(contractA).setA(_a+1);
    }

    function getB() public view returns (uint){
        return a;
    }
}