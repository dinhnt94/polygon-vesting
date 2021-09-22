import Upload from "../components/Upload/index";
import { Row, Col, notification } from "antd";
import Table from "../components/Table";
import FormAdd from "../components/Form";
import { useEffect } from "react";
import { useContract } from "../hooks/contract";

const App = ({type}) => {
  const { connectBcoin } = useContract();
  useEffect(() => {
    const init = async () => {
      const result = await connectBcoin();
      if (result && result.account) {
        if (result && result.account) {
          notification.success({
            message: "Connect to Metamask wallet success"
          });
        } else {
          notification.error({
            message: "Not Found Metamask"
          });
        }
      }
    };
    init();
  }, []);
  let name = window.location.pathname.replace("/", "");
  
  return (
    <div className="container">
      <h1>
        Tool
        <span style={{ textTransform: "capitalize" }}> {type}</span>
      </h1>
      <Row gutter={[20, 20]} style={{ marginTop: 100 }}>
        <Col span="20">
          <FormAdd />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 50 }} span={12}>
          <Upload />
        </Col>
      </Row>
      <Row>
        <Col style={{ marginTop: 50 }} span={24}>
          <Table />
        </Col>
      </Row>
    </div>
  );
};

export default App;
