// SPDX-License-Identifier: GPL3
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/access/Ownable.sol";

contract HelloWorldCclef is Ownable {

    string hellomessage = "Hello, World!";

    constructor() public payable {
    }

    function hello() public view returns (string memory) {
        return hellomessage;
    }

    function destroy() public onlyOwner {
        selfdestruct(msg.sender);
    }
}