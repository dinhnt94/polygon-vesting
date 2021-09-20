import { Table, Tag, Space, Button } from "antd";
import { useContract } from "../../hooks/contract";
import { useAddress } from "../../hooks/address";
import { addDocAddres } from "../../untils/filrebase";

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
      return <Tag color={text === "completed" ? "success" : "gray"}>{text} </Tag>;
    }
  },
  {
    title: "Action",
    key: "action",
    render: (text, record) => <Action record={record} />
  }
];

const Action = ({ record }) => {
  const { addBeneficiary } = useContract();
  const { updateStatus } = useAddress();
  const onClick = async () => {
    const amount = parseInt(record.amount);
    await addBeneficiary(record.address, amount);
    const address = { ...record, status: "completed" };
    await addDocAddres(address);
    updateStatus(address);
  };
  return (
    <Space size="middle">
      <Button type="primary" disabled={record.status === "completed"} onClick={onClick}>
        Confirm
      </Button>
    </Space>
  );
};

const App = () => {
  const { list } = useAddress();
  if (list.length === 0) return null;
  return <Table columns={columns} dataSource={list} rowKey={(record, index) => index} hideOnSinglePage={true} />;
};

export default App;
