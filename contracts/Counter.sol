// SPDX-License-Identifier: MIT
pragma  solidity ^0.8.0;
import "hardhat/console.sol";


contract Counter {
    uint counter;
    event counterInc(uint counter);

    function count() public {
        counter=counter+10;
        console.log("Counter is now  " ,counter);
        emit counterInc(counter);
    }

    function getCount() public view returns (uint32) {
        return uint32(counter);
    }
}