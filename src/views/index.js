import { notification } from "antd";
import { useContract } from "../hooks/contract";
import { useState, useEffect } from "react";
import { Fragment } from "react";
import moment from "moment";

const SECONDS_PER_MONTH = 2628000;

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
      const time = await vestingStartAt();
      setInfo(balance);
      setTimeStart(time);
      notification.success({
        message: "Connected to wallet"
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
    // getInfo();
  }, []);

  const current_time = parseInt(new Date().getTime() / 1000);
  const time = current_time - timeStart;
  const monthClaim = Math.floor(time / SECONDS_PER_MONTH);
  const balance = (info.initialBalance - info.totalClaimed) / Math.pow(10, 18);
  const isClaim = monthClaim > parseInt(info.monthsClaimed) ? true : false;
  const next = parseInt(Math.ceil(time / SECONDS_PER_MONTH) * SECONDS_PER_MONTH) + parseInt(timeStart);
  // const nextDate = new Date(next * 1000).toLocaleString().split(",")[0];
  const nextDate = moment.unix(next).format("MM/DD/YYYY");

  console.log("monthClaim", monthClaim);
  console.log("=========");
  console.log(next, nextDate);
  console.log("=========");

  const totalClaimed = info.totalClaimed / Math.pow(10, 18);
  const month_not_claim = monthClaim - parseInt(info.monthsClaimed);
  const amount_can_be_claim = month_not_claim > 0 ? month_not_claim * ((balance + totalClaimed) / 10) : "0";
  return (
    <div className="container-claim" style={{ background: "url(/picture.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
      <div className="wrap-claim">
        <div className="claim">
          <div className="claim-card">
            {info.initialBalance !== undefined && (
              <Fragment>
                <p>Vested Balance: {balance + totalClaimed}</p>
                <p>Month Claimed: {info.monthsClaimed}</p>
                <p>Total BOMB Claimed: {totalClaimed}</p>
                <p>Next Claimable On(MM/DD/YYYY): {nextDate}</p>
                <p>Amount of BOMB that can be claimed: {amount_can_be_claim}</p>
                <button onClick={onClick} disabled={!isClaim} className={"button-claim " + (!isClaim ? "disbaled" : "")}>
                  Claim
                </button>
              </Fragment>
            )}

            {info.initialBalance === undefined && (
              <div style={{ textAlign: "center" }}>
                <button onClick={connectWallet} className={"button-claim "}>
                  Connect to Metamask Wallet
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
