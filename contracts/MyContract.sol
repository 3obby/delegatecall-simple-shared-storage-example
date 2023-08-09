// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./MyContractStorage.sol";

contract MyContract is MyContractStorage {
    address public SetVarsContract;

    constructor(address _AddrSetVarsContract) {
        SetVarsContract = _AddrSetVarsContract;
    }

    function setVars(uint _num) public payable {
        (bool success, ) = SetVarsContract.delegatecall(
            abi.encodeWithSignature("setVars(uint256)", _num)
        );
        require(success);
    }
}
