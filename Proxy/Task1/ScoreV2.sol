// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Score2 {
  uint256 public score; 
  
  function implSetScore(uint256 _score) public{
    score = _score + 1;
  }
}
