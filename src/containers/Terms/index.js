import { Checkbox, Row, Col } from "antd";

const Terms = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Checkbox style={{ marginTop: "30px", marginBottom: "10px" }}>
          Terms & conditions
        </Checkbox>
      </Col>
    </Row>
  );
};

export default Terms;
