// SPDX-License-Identifier: GPL-3.0

pragma solidity  >= 0.7.0 < 0.9.0;

contract ScoreStorage {
  uint public score;
  
  function setScore(uint _score) public {
    score = _score;
  }
  
  function getScore(uint _score) public view returns(uint) {
    return score;
  }
}
