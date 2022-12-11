// SPDX-License-Identifier: GPL-3.0
import "./ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract ScoreV1 {
  ScoreStorage ss;
  
  constructor (address scoreStorage) {
    ss = ScoreStorage(scoreStorage);
  }
  
  function setScore(uint _score) {
    ss.setScore(_score);
  }
}
