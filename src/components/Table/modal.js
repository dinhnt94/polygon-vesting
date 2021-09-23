import { Table, Tag, Space, Button, notification, Modal } from "antd";
import { useContract } from "../../hooks/contract";
import { useAddress } from "../../hooks/address";
import { useState } from "react";

const ModalDetail = ({ address, info = {}, setInfo, isModalVisible, setIsModalVisible }) => {
  console.log(info);
  const { balanceOf, timeArt, claimVestedTokenByAddress } = useContract();
  const SECONDS_PER_MONTH = 2628000;
  const current_time = parseInt(new Date().getTime() / 1000);
  const time = current_time - timeArt;
  const monthClaim = Math.floor(time / SECONDS_PER_MONTH);
  const balance = (info.initialBalance - info.totalClaimed) / Math.pow(10, 18);
  const isClaim =
    monthClaim / SECONDS_PER_MONTH > parseInt(info.monthsClaimed) &&
    parseFloat(info.initialBalance / Math.pow(10, 18)) > 0;

  const next =
    parseInt(Math.ceil(time / SECONDS_PER_MONTH) * SECONDS_PER_MONTH) + parseInt(timeArt);
  const nextDate = new Date(next * 1000).toLocaleString().split(",")[0];
  const totalClaimed = info.totalClaimed / Math.pow(10, 18);
  const month_not_claim = monthClaim - parseInt(info.monthsClaimed);
  const amount_can_be_claim =
    month_not_claim > 0 ? month_not_claim * ((balance + totalClaimed) / 10) : "0";

  const submit = async () => {
    const result = await claimVestedTokenByAddress(address);
    if (result) {
      notification.success({
        message: "Claim success"
      });
      const info_temp = await balanceOf(address);
      setInfo(info_temp);
    } else {
      notification.error({
        message: "Claim fail",
        description: "Some thing wrong"
      });
    }
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Modal
      title="Info Wallet Adddress"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <div style={{ paddingTop: 20 }}>
        <p>Vested Balance: {balance + totalClaimed}</p>
        <p>Month Claimed: {info.monthsClaimed}</p>
        <p>Total Bcoin Claimed: {totalClaimed}</p>
        <p>Next Claimable On: {nextDate}</p>
        <p>Amount of BCOIN that can be claimed: {amount_can_be_claim}</p>
        <button
          onClick={submit}
          disabled={!isClaim}
          className={"button-claim " + (!isClaim ? "disbaled" : "")}
        >
          Claim
        </button>
      </div>
    </Modal>
  );
};

export default ModalDetail;
