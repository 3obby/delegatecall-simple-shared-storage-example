// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyContractStorage.sol";

contract SetVarsContract is MyContractStorage {
    function setVars(uint _num) public payable {
        num = _num;
        sender = msg.sender;
        value = msg.value;
    }
}
