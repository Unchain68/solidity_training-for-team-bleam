// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Score {
  uint public score;
  
  function incrementScore(uint _score) public {
    score = _score;
  }
}
