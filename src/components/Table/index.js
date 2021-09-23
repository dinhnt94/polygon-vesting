import { Table, Tag, Space, Button, notification, Modal } from "antd";
import { useContract } from "../../hooks/contract";
import { useAddress } from "../../hooks/address";
import { useState } from "react";
import ModalDetail from "./modal";

const Balance = ({ record }) => {
  const { balanceOf, timeArt, claimVestedTokenByAddress } = useContract();
  const [info, setInfo] = useState();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const onClick = async () => {
    let info_result = await balanceOf(record.address);
    setInfo(info_result);
    setIsModalVisible(true);
  };

  return (
    <Space size="middle">
      <Button type="" onClick={onClick}>
        Get detail
      </Button>
      <ModalDetail
        info={info}
        setInfo={setInfo}
        address={record.address}
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
      />
    </Space>
  );
};

const columns = [
  {
    title: "Address",
    dataIndex: "address",
    key: "address"
  },
  {
    title: "amount",
    key: "amount",
    dataIndex: "amount"
  },

  {
    title: "status",
    key: "status",
    dataIndex: "status",
    render: (text, record) => {
      const mapcolor = { completed: "success", draft: "gray", approve: "blue" };
      return <Tag color={mapcolor[text]}>{text} </Tag>;
    }
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <Action record={record} />
  },
  {
    title: "Validate",
    key: "Validate",
    dataIndex: "",
    render: (text, record) => <Balance record={record} />
  }
];

const Action = ({ record }) => {
  const { approve, confirm } = useContract();
  const { updateStatus } = useAddress();
  const onClick = async () => {
    const amount = record.amount;

    const result_approve = await approve(amount);
    if (result_approve) {
      record.status = "approve";
      notification.success({
        message: "Approve Success"
      });
      updateStatus(record);
    } else {
      notification.error({
        message: "Approve fail",
        description: "Some thing wrong!"
      });
    }
  };

  const conform = async () => {
    const result_approve = await confirm(record);
    if (result_approve) {
      record.status = "completed";
      notification.success({
        message: "Success"
      });
      updateStatus(record);
    } else {
      notification.error({
        message: "Confirm fail",
        description: "Some thing wrong!"
      });
    }
  };

  return (
    <Space size="middle">
      {record.status === "draft" && (
        <Button type="" onClick={onClick}>
          Approve
        </Button>
      )}

      {record.status === "completed" && (
        <Button type="success" disabled={record.status === "completed"} onClick={onClick}>
          Completed
        </Button>
      )}
      {record.status === "approve" && (
        <Button type="primary" onClick={conform}>
          Confirm
        </Button>
      )}
    </Space>
  );
};

const App = () => {
  const { list } = useAddress();
  if (list.length === 0) return null;
  return (
    <Table
      columns={columns}
      dataSource={list}
      rowKey={(record, index) => index}
      hideOnSinglePage={true}
    />
  );
};

export default App;
