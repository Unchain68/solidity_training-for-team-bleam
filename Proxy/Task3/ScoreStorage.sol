// SPDX-License-Identifier: GPL-3.0

pragma solidity >= 0.7.0 < 0.9.0;

contract ScoreStorage {

  mapping(bytes32=>uint) uints;
  
  function setUints(bytes32 key, uint score) public {
    uints[key] = score;
  }
  
  function getUints(bytes32 key) public view returns(uint) {
    return uints[key];
  }
}
