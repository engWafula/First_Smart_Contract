// SPDX-License-Identifier: MIT
pragma solidity^0.8.0;

contract Hero{
    enum Class{
        Mage,
        Healer,
        Babarian
    }
    mapping(address => uint[]) addressToHero;

    function generateRandom() public virtual  view returns (uint) {
    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp)));
}

    function getHeros() public view returns(uint[] memory) {
   return addressToHero[msg.sender];
    }

 function getHero(uint hero) public pure returns(uint32) {

     return uint32((hero >> 2) & 0x1f);

 }

  function getHealth(uint hero) public pure returns(uint32) {

     return  uint32((hero >> 5) & 0x1f);

 }
  function getDex(uint hero) public pure returns(uint32) {

     return uint32((hero >> 7) & 0x1f);

 }

  function getItelect(uint hero) public pure returns(uint32) {

     return uint32((hero >> 12) & 0x1f);

  }

  function getMagic(uint hero) public pure returns(uint32) {

     return uint32((hero >> 17) & 0x1F);

 }

    function createHero(Class class) public payable{
    require (msg.value >= 0.05 ether,"PLease send more Money");

    uint[] memory stats= new uint[](5);
    stats[0]=2;
    stats[1]=7;
    stats[2]=12;
    stats[3]=17;
    stats[4]=22;

    uint len=5;
    uint hero =uint(class);

    do{
    uint pos = generateRandom() % len;
    uint value=generateRandom()% (13+len)+1;
    hero|=value<<stats[pos];

  len--;

  stats[pos]=stats[len];
    }while(len>0);

    addressToHero[msg.sender].push(hero);
    }
    
}