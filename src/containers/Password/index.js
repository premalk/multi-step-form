import { Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Password = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Input.Password
          placeholder="Password"
          style={{ marginTop: "30px", marginBottom: "5px" }}
        />
        <Input.Password
          placeholder="Re-enter password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          style={{ marginBottom: "10px" }}
        />
      </Col>
    </Row>
  );
};

export default Password;
