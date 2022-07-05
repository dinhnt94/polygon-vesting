import { createContext, useEffect, useRef, useState } from "react";
import { getConfig } from "../utils/config";
import { BoxLoading } from "react-loadingg";
import Web3 from "web3";
import _ from 'lodash';
import { Result } from "antd";

export const contextWeb3 = createContext("Default Value");

function Contract({ children, type }) {
  const [loading, setLoading] = useState(false);
  const [timeArt, setTimeArt] = useState(0);
  const { BCOINTOKEN, PRIVATESALEBCOINVESTING } = getConfig(type);
  const constractBcoin = useRef({});
  const PrivateSaleCT = useRef({});
  const web3Ref = useRef({});
  const account = useRef({});
  const enableEthereum = async () => {
    if (window.ethereum) {
      await window.ethereum.enable();
      return true;
    } else {
      return false;
    }
  };

  const connectBcoin = async () => {
    const connected = await enableEthereum();
    if (!connected) return;

    const web3 = await new Web3(window.ethereum);
    const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
    const BToken = await new web3.eth.Contract(BCOINTOKEN.abi, BCOINTOKEN.address, {
      from: accounts[0]
    });
    PrivateSaleCT.current = await new web3.eth.Contract(
      PRIVATESALEBCOINVESTING.abi,
      PRIVATESALEBCOINVESTING.address,
      { from: accounts[0] }
    );
    constractBcoin.current = BToken;
    account.current = accounts[0];
    web3Ref.current = web3;

    const time = await vestingStartAt();
    setTimeArt(time);

    return {
      account: account.current
    };
  };

  const approve = async (amount) => {
    const BToken = constractBcoin.current;
    const price = (amount * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });

    setLoading(true);
    try {
      await BToken.methods
        .approve(PRIVATESALEBCOINVESTING.address, price)
        .send({ from: account.current });
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const maxApprove = async () => {
    const BToken = constractBcoin.current
    setLoading(true)
    try {
      await BToken.methods
        .approve(PRIVATESALEBCOINVESTING.address, '115792089237316195423570985008687907853269984665640564039457584007913129639935')
        .send({from: account.current})
      setLoading(false)
      return true
    } catch (error) {
      console.log(error)
      setLoading(false)
      return false
    }
  }

  const confirm = async ({ address, amount }) => {
    const PToken = PrivateSaleCT.current;
    const price = (amount * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });
    setLoading(true);
    try {
      await PToken.methods.addBeneficiary(address, price).send({ from: account.current });
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const vestingStartAt = async () => {
    const PToken = PrivateSaleCT.current;
    setLoading(true);
    try {
      const startAt = await PToken.methods.vestingStartAt().call();
      setLoading(false);
      return parseInt(startAt);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return 0;
    }
  };

  const balanceOf = async (address = account.current) => {
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

  const claimVestedToken = async () => {
    const PToken = PrivateSaleCT.current;
    setLoading(true);
    try {
      await PToken.methods.claimVestedToken(account.current).send();
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const claimVestedTokenByAddress = async (address) => {
    const PToken = PrivateSaleCT.current;
    setLoading(true);
    try {
      await PToken.methods.claimVestedToken(address).send();
      setLoading(false);
      return true;
    } catch (error) {
      console.log(error);
      setLoading(false);
      return false;
    }
  };

  const addBeneficiary = async (address, amount) => {
    const price = (Number(amount) * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });

    return await PrivateSaleCT.current.methods.addBeneficiary(address, price).send();
  }

  const reduceInitBalance = async (address, reduceNum) => {
    const price = (Number(reduceNum) * Math.pow(10, 18)).toLocaleString("fullwide", { useGrouping: false });

    return await PrivateSaleCT.current.methods.reduceInitBalance(address, price).send();
  }

  const nerfUsers = async (address, percentage) => {
    return await PrivateSaleCT.current.methods.nerfUsers(address, percentage).send();
  }

  const addBeneficiarys = async (items) => {
    const addressList = _.map(items, (item) => item.address);
    const amountList = _.map(items, (item) => Number(item.amount));
    const total = _.sum(amountList)
    const amountTotalConvert = (Number(total) * Math.pow(10, 18)).toLocaleString('fullwide', {useGrouping: false})
    const amountListConvert = amountList.map((item) => {
      return (Number(item) * Math.pow(10, 18)).toLocaleString('fullwide', {useGrouping: false})
    })

    return await PrivateSaleCT.current.methods.addBeneficiarys(addressList, amountListConvert, amountTotalConvert).send({ from: account.current });
  }


  useEffect(() => {
    // connectBcoin();
  }, []);

  const value = {
    connectBcoin,
    BToken: constractBcoin.current,
    dress_account: account.current,
    setLoading: setLoading,
    approve,
    maxApprove,
    addBeneficiarys,
    confirm,
    balanceOf,
    claimVestedToken,
    vestingStartAt,
    timeArt,
    claimVestedTokenByAddress,
    addBeneficiary,
    reduceInitBalance,
    nerfUsers
  };

  return (
    <contextWeb3.Provider value={value}>
      {children}
      {loading && (
        <div className="loading">
          <BoxLoading size="large" />;
        </div>
      )}
    </contextWeb3.Provider>
  );
}

export default Contract;
