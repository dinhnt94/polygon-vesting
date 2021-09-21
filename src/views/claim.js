import { Row, Col, Button, notification } from "antd";
import { useContract } from "../hooks/contract";
import { useState, useEffect } from "react";
import Header from "../components/Header";

// const SECONDS_PER_MONTH = 2628000;
const SECONDS_PER_MONTH = 24 * 30 * 60 * 60;

const App = () => {
  const [info, setInfo] = useState({});
  const [timeStart, setTimeStart] = useState(0);
  const { claimVestedToken, balanceOf, vestingStartAt, connectBcoin } = useContract();
  const onClick = async () => {
    const result = await claimVestedToken();
    if (result) {
      notification.success({
        message: "Notification Title",
        description: "This is the content of the notification. This is the content of the notification. This is the content of the notification."
      });
      const balance = await balanceOf();
      setInfo(balance);
    } else {
      notification.error({
        message: "Claim fail",
        description: "Some thing wrong"
      });
    }
  };

  const connectWallet = async () => {
    const result = await connectBcoin();

    if (result && result.account) {
      const balance = await balanceOf();
      setInfo(balance);
      notification.success({
        message: "Connect to success"
      });
    } else {
      notification.error({
        message: "Not Found Metamask"
      });
    }
  };

  useEffect(() => {
    const getInfo = async () => {
      const balance = await balanceOf();
      const time = await vestingStartAt();
      setInfo(balance);
      setTimeStart(time);
    };
    getInfo();
  }, []);

  const current_time = parseInt(new Date().getTime() / 1000);
  const time = current_time - timeStart;
  const monthClaim = Math.floor(time / SECONDS_PER_MONTH);

  const balance = (info.initialBalance - info.totalClaimed) / Math.pow(10, 18);
  const isClaim = monthClaim / SECONDS_PER_MONTH > parseInt(info.monthsClaimed) ? true : false;

  const next = parseInt(Math.ceil(time / SECONDS_PER_MONTH) * SECONDS_PER_MONTH) + parseInt(timeStart);
  const nextDate = new Date(next * 1000).toLocaleString().split(",")[0];
  const totalClaimed = info.totalClaimed / Math.pow(10, 18);
  const month_not_claim = monthClaim - parseInt(info.monthsClaimed);
  return (
    <div className="container-claim">
      <div className="claim">
        <div className="claim-card">
          <p>Init Balance: {balance + totalClaimed}</p>
          <p>Current Balance: {balance}</p>
          <p>Month Claimed: {info.monthsClaimed}</p>
          <p>Total Bcoin Claimed: {totalClaimed}</p>
          <p>Next Claimable On: {nextDate}</p>
          <p>Amount of BCOIN that can be claimed: {month_not_claim * ((balance + totalClaimed) / 10)}</p>
          {info.initialBalance !== undefined && (
            <button onClick={onClick} disabled={!isClaim} className={"button-claim " + (!isClaim ? "disbaled" : "")}>
              Claim
            </button>
          )}

          {info.initialBalance === undefined && (
            <button onClick={connectWallet} className={"button-claim "}>
              Connect to Metamask Wallet
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
