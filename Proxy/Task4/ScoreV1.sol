// SPDX-License-Identifier: GPL-3.0

import "./ProxyStorage.sol";
import "./ScoreStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract ScoreV1 is ProxyStorage, ScoreStorage {

    function setScore(uint256 _score) public {
        score = _score;
    }
    
    function getScore() public view returns(uint256) {
        return score;
    }
    
    function getEncodedSignature(string memory _func, uint256 num) 
        external 
        pure 
        returns(bytes memory) 
    {
        return abi.encodedWithSignature(_func, num);
    }
}

