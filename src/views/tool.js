import Upload from "../components/Upload/index";
import { Row, Col } from "antd";
import Table from "../components/Table";
import FormAdd from "../components/Form";

const App = () => {
  return (
    <div className="container">
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
