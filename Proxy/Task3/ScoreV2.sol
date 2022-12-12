// SPDX-License-Identifier: GPL-3.0

import "./ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract ScoreV2 {
  
  ScoreStorage ss;
  
  bytes32 public constant SCORE = keccak256("score");
  
  constructor(address scoreStorage){
    ss = ScoreStorage(scoreStorage);
  }
  
  function incrementScore() public {
    ss.setUints(SCORE, ss.getUints(SCORE) + 1);
  }
}
