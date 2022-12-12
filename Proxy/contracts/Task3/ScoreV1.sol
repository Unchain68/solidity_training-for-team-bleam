// SPDX-License-Identifier: GPL-3.0

import "./ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract ScoreV1 {

  ScoreStorage ss; 
  
  bytes32 public constant SCORE = keccak256("score");
  
  constructor(address scoreStorage) {
    ss = ScoreStorage(scoreStorage);
  }
  
  function setScore(uint256 _score) public {
    ss.setUints(SCORE,_score);
  }
}
