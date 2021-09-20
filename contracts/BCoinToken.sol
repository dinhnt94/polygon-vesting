// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./BEP20.sol";

contract BCoinToken is BEP20Detailed, BEP20 {
  constructor() BEP20Detailed("Bomber Coin", "BCOIN", 18) {
    uint256 totalTokens = 100000000 * 10**uint256(decimals());
    _mint(msg.sender, totalTokens);
  }

  function transfer(address _receiver, uint256 _amount) public virtual override returns (bool success) {
    require(_receiver != address(0), "zero-address");
    return BEP20.transfer(_receiver, _amount);
  }

  function transferFrom(
    address _from,
    address _receiver,
    uint256 _amount
  ) public virtual override returns (bool) {
    require(_from != address(0), "zero-address");
    require(_receiver != address(0), "zero-address");
    require(_amount <= allowance(_from, msg.sender), "BEP20: transfer amount exceeds allowance");
    return BEP20.transferFrom(_from, _receiver, _amount);
  }
}
