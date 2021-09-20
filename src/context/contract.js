import { createContext, useEffect, useRef, useState } from "react";
import { BCOIN, TOKEN_PRIVATE_BCOIN, PRIVATED_SALE } from "../constant";
import Web3 from "web3";
import { Result } from "antd";

export const contextWeb3 = createContext("Default Value");

function Contract({ children }) {
  const [loading, setLoading] = useState(false);
  const [connect, setConnect] = useState("loading");

  const constractBcoin = useRef({});
  const PrivateSaleCT = useRef({});
  const web3Ref = useRef({});
  const account = useRef({});
  const enableEthereum = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      setConnect("success");
      return true;
    } else {
      setConnect("fail");
      return false;
    }
  };

  const connectBcoin = async () => {
    const connected = await enableEthereum();

    if (!connected) return;

    const web3 = await new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const BToken = await new web3.eth.Contract(BCOIN.abi, BCOIN.address);
    PrivateSaleCT.current = await new web3.eth.Contract(PRIVATED_SALE.abi, PRIVATED_SALE.address);
    constractBcoin.current = BToken;
    account.current = accounts[0];
    web3Ref.current = web3;
  };

  const addBeneficiary = async (address, amount) => {
    const BToken = constractBcoin.current;
    const PToken = PrivateSaleCT.current;
    setLoading(true);
    try {
      await BToken.methods.approve(TOKEN_PRIVATE_BCOIN, amount).send({ from: account.current });
      await PToken.methods.addBeneficiary(address, amount).send({ from: account.current });
    } catch (error) {
      console.log(error);
      return false;
    }
    setLoading(false);
    return true;
  };

  useEffect(() => {
    connectBcoin();
  }, []);

  const value = { BToken: constractBcoin.current, dress_account: account.current, addBeneficiary: addBeneficiary, setLoading: setLoading };

  return (
    <contextWeb3.Provider value={value}>
      {connect === "success" && children}
      {connect === "fail" && <Result status="404" title="404" subTitle="Sorry, Not found Metamask Wallet." />}
      {loading && <div className="loading">Loading ...</div>}
    </contextWeb3.Provider>
  );
}

export default Contract;
