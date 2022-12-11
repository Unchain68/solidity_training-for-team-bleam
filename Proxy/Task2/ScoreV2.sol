// SPDX-License-Identifier: GPL-3.0

pragma solidity  >= 0.7.0 < 0.9.0;

contract ScoreV2 {
  ScoreStorage ss;
  
  constructor(address scoreStorage) {
    ss = ScoreStorage(scoreStorage);
  }
  
  function incrementScore(uint score) public {
    ss.setScore(ss.getScore() + 1);
  }
}
