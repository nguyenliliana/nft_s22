// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract EtherWallet {
    address payable public owner;
    mapping(address => uint) balances;
    
    constructor() {
        owner = payable(msg.sender);
    }

    receive() external payable {}

    function withdraw(uint _amount) external {
        require(msg.sender == owner, "Only the owner can call this method.");
        payable(msg.sender).transfer(_amount);
    }

    function deposit() external payable {
        if(msg.value < 0) {
            revert();
        }
        balances[msg.sender] += msg.value;
    }

    function getBalance() external view returns (uint) {
        return address(this).balance;
    }

}