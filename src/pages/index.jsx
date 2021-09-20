import React, { useEffect } from "react";

const ethEnabled = () => {
  if (window.web3) {
    window.web3 = new Web3("https://testnet.bscscan.com");
    window.ethereum.enable();
    return true;
  }
  return false;
};

// web3.eth.getAccounts().then(console.log);

function HomePage() {
  useEffect(() => {
    if (!ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
    }
    // import Web3 from "web3";
  }, []);
  return (
    <>
      <h1>Wallet</h1>
      connect wallet
    </>
  );
}

// Wrap everything in <UseWalletProvider />
export default HomePage;
