import { Table, Tag, Space, Button, notification, Modal } from "antd";
import { useContract } from "../../hooks/contract";
import { useAddress } from "../../hooks/address";

const Balance = ({ record }) => {
  const { balanceOf } = useContract();
  const onClick = async () => {
    const reuslt = await balanceOf(record.address);
    const balance = reuslt[0] / Math.pow(10, 18);
    Modal.info({
      title: "Info Wallet Adddress",
      content: (
        <div style={{ paddingTop: 20 }}>
          <p>InitBalance: {balance}</p>
          <p>MethodsClaimed: {reuslt[1]}</p>
          <p>TotalClaimed: {reuslt[2]}</p>
        </div>
      ),
      onOk() {}
    });
  };

  return (
    <Space size="middle">
      <Button type="" onClick={onClick}>
        Get detail
      </Button>
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
  return <Table columns={columns} dataSource={list} rowKey={(record, index) => index} hideOnSinglePage={true} />;
};

export default App;
