import { Row, Col, Button, notification, Result } from "antd";
import { useContract } from "../hooks/contract";
import { useState, useEffect } from "react";

const App = () => {
  const [info, setInfo] = useState({});
  const [timeStart, setTimeStart] = useState(0);
  const { claimVestedToken, balanceOf, vestingStartAt } = useContract();
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
  const monthClaim = Math.floor(time / (24 * 60 * 60) / 30);

  const balance = (info.initialBalance - info.totalClaimed) / Math.pow(10, 18);
  const isShowClaim = monthClaim > info.monthsClaimed && balance > 0 ? true : false;

  return (
    <div>
      <Row gutter={[20, 20]} style={{ marginTop: 100 }}></Row>
    </div>
  );
};

export default App;
