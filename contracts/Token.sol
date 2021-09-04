// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

//import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.1/contracts/token/ERC20/ERC20.sol"; // this for remix


contract BOMBC is ERC20 {
    address public owner;
    
    constructor() payable ERC20("BCOIN Token", "BCOIN") {
        owner = msg.sender;
    }

    function mint(address account, uint256 amount) public {
        require(msg.sender==owner, "!owner"); 
        _mint(account, amount);
    }
}