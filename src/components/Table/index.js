import { Table, Tag, Space, Button, notification, Modal, Form, InputNumber, Col, Row, Select } from 'antd'
import { useContract } from "../../hooks/contract";
import { useAddress } from "../../hooks/address";
import { useEffect, useState } from 'react'
import ModalDetail from "./modal";
const { Option } = Select;

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
  const { addBeneficiary, reduceInitBalance, nerfUsers, setLoading } = useContract()
  const [visible, showModal] = useState(false);
  const [filter, setFilter] = useState('all');
  const [recordUpdate, setRecordUpdate] = useState(null);

  const [form] = Form.useForm();

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
    },
    {
      title: "Update",
      key: "update",
      dataIndex: "",
      render: (text, record) =>  <Button type="primary" onClick={() => onUpdate(record)}>
        Change
      </Button>
    }
  ];

  if (list.length === 0) return null;

  const onUpdate = (record) => {
    setRecordUpdate(record);
    showModal(true);
  };

  const onClose = () => {
    form.resetFields();
    showModal(false);
  };

  const onChangeFilter = (value) => {
    setFilter(value);
  };

  const onSubmitChange = async () => {
    setLoading(true)
    try {
      const {address} = recordUpdate
      const {amount_added, amount_reduce, percent_reduce} = form.getFieldsValue()

      await addBeneficiary(address, amount_added)
      await reduceInitBalance(address, amount_reduce)
      await nerfUsers(address, percent_reduce)
    } catch (e) {
      console.log(e)
    } finally {
      onClose()
      setLoading(false)
    }
  }

  const data = list.filter((item) => {
    if (filter === 'all') return true

    return item.status === filter
  })

  return (
    <>
      <Row justify="space-between" style={{ marginTop: 5, marginBottom: 25}} >
        <Col span={24} style={{textAlign: "center"}}>
          <Select defaultValue="all" style={{ width: 120, marginRight: 20 }} onChange={onChangeFilter}>
            <Option value="all">All</Option>
            <Option value="draft">Draft</Option>
            <Option value="approve">Waiting</Option>
          </Select>

          <Button disabled={filter === 'all' || data.length === 0}>Approve All</Button>
        </Col>
      </Row>

      <Table
        columns={columns}
        dataSource={data}
        rowKey={(record, index) => index}
        hideOnSinglePage={true}
      />
      <Modal
        title="Change Setting"
        visible={visible}
        onOk={onSubmitChange}
        onCancel={onClose}
        okText="Submit"
        cancelText="Cancel"
      >
        <Form form={form} initialValues={{amount_added: 0, amount_reduce: 0, percent_reduce: 0}}>
          <Form.Item label="Amount added" name="amount_added">
            <InputNumber placeholder="0" min={0} style={{ width: 300 }}/>
          </Form.Item>
          <Form.Item label="Amount reduce" name="amount_reduce">
            <InputNumber placeholder="0" min={0} style={{ width: 300 }}/>
          </Form.Item>
          <Form.Item label="Percent reduce" name="percent_reduce">
            <InputNumber placeholder="0" min={0} max={100} style={{ width: 300 }}/>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default App;
