// SPDX-License-Identifier: GPL-3.0

import "./ProxyStorage.sol";

pragma solidity >= 0.7.0 < 0.9.0;

contract Proxy {
  
    uint256 public score;
  
    constructor(address _imple) {
        implementation = _imple;
    }
    
    function setImplementation(address _imple) public {
        implementation = _imple;
    }
    
    fallback () external {
        assembly {
            let ptr := mload(0x40)
            calldatacopy(ptr, 0, calldatasize())
            let result := delegatecall(gas(), sload(implementation.slot), ptr, calldatatsize(), 0, 0)
            let size := returndatasize()
            returndatasize(ptr, 0, size())
            
            switch result
            case 0 { revert(ptr, size) }
            default { return(ptr, size) }
        }
    }
}
