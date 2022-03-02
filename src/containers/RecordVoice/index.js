import { Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const RecordVoice = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Button
          style={{ marginBottom: "10px", marginTop: "30px" }}
          icon={<AudioOutlined />}
          size="large"
          block
        >
          Record Voice
        </Button>
      </Col>
    </Row>
  );
};

export default RecordVoice;
