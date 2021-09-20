import { Button, Row, Col, Input, Form, InputNumber } from "antd";
import Upload from "../components/Upload/index";
import { useState } from "react";
import Table from "../components/Table";
import { useContract } from "../hooks/contract";
import { addDocAddres } from "../untils/filrebase";

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 14 },
  labelAlign: "left"
};

const App = () => {
  const [columns, setColumns] = useState([]);
  const { addBeneficiary } = useContract();
  const [form] = Form.useForm();

  const onFinish = async (value) => {
    if (value.address && value.amount) {
      await addBeneficiary(value.address, value.amount);
      await addDocAddres({ address: value.address, amount: value.amount, status: "completed" });
      form.resetFields();
    } else {
      alert("Enter address and amount");
    }
  };

  return (
    <div className="container">
      <Row gutter={[20, 20]} style={{ marginTop: 100 }}>
        <Col span="12">
          <Form {...formItemLayout} form={form} onFinish={onFinish}>
            <Form.Item label="Address wallet" name="address">
              <Input placeholder="Address wallet" />
            </Form.Item>
            <Form.Item label="Amount" name="amount">
              <InputNumber style={{ width: "100%" }} placeholder="Address wallet" />
            </Form.Item>

            <Button type="primary" htmlType="submit">
              Add Beneficiary
            </Button>
          </Form>
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 50 }} span={12}>
          <Upload setColumns={setColumns} />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 50 }} span={24}>
          <Table data={columns} />
        </Col>
      </Row>
    </div>
  );
};

export default App;
