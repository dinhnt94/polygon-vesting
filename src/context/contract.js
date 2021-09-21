import { createContext, useEffect, useRef, useState } from "react";
import { BCOINTOKEN, PRIVATESALEBCOINVESTING } from "../untils/config";
import { BoxLoading } from "react-loadingg";
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
    const BToken = await new web3.eth.Contract(BCOINTOKEN.abi, BCOINTOKEN.address, { from: accounts[0] });
    PrivateSaleCT.current = await new web3.eth.Contract(PRIVATESALEBCOINVESTING.abi, PRIVATESALEBCOINVESTING.address, { from: accounts[0] });
    constractBcoin.current = BToken;
    account.current = accounts[0];
    web3Ref.current = web3;
  };

  const approve = async (amount) => {
    const BToken = constractBcoin.current;
    const price = (amount * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });
    console.log(price);
    setLoading(true);
    try {
      await BToken.methods.approve(PRIVATESALEBCOINVESTING.address, price).send({ from: account.current });
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const confirm = async ({ address, amount }) => {
    const PToken = PrivateSaleCT.current;
    const price = (amount * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });
    setLoading(true);
    try {
      await await PToken.methods.addBeneficiary(address, price).send({ from: account.current });
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const balanceOf = async (address) => {
    const PToken = PrivateSaleCT.current;
    setLoading(true);
    try {
      const balance = await PToken.methods.beneficiaries(address).call();

      setLoading(false);
      return balance;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return "null";
    }
  };

  useEffect(() => {
    connectBcoin();
  }, []);

  const value = { BToken: constractBcoin.current, dress_account: account.current, setLoading: setLoading, approve, confirm, balanceOf };

  return (
    <contextWeb3.Provider value={value}>
      {connect === "success" && children}
      {connect === "fail" && <Result status="404" title="404" subTitle="Sorry, Not found Metamask Wallet." />}
      {loading && (
        <div className="loading">
          <BoxLoading size="large" />;
        </div>
      )}
    </contextWeb3.Provider>
  );
}

export default Contract;
