import { Button, Input, Form, InputNumber } from "antd";
import { useAddress } from "../../hooks/address";

const formItemLayout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
  labelAlign: "left"
};
const FormAddAddress = () => {
  const { addDoc } = useAddress();
  const [form] = Form.useForm();

  const onFinish = async (value) => {
    if (value.address && value.amount) {
      value.status = "draft";
      await addDoc(value);
      form.resetFields();
    } else {
      alert("Enter address and amount");
    }
  };
  return (
    <Form {...formItemLayout} form={form} onFinish={onFinish}>
      <Form.Item label="Address wallet" name="address">
        <Input placeholder="Address wallet" />
      </Form.Item>
      <Form.Item label="Amount" name="amount">
        <InputNumber style={{ width: "100%" }} placeholder="Amount transfer" />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add to list address
      </Button>
    </Form>
  );
};

export default FormAddAddress;
