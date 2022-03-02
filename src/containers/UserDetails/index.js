import { Input } from "antd";
import {
  UserOutlined,
  FieldNumberOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

const UserDetails = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <Input
          size="large"
          style={{ marginTop: "30px", marginBottom: "5px" }}
          placeholder="Email"
          prefix={<MailOutlined />}
        />
        <Input
          size="large"
          style={{ marginTop: "5px", marginBottom: "5px" }}
          placeholder="Name"
          prefix={<UserOutlined />}
        />
        <Input
          size="large"
          style={{ marginTop: "5px", marginBottom: "10px" }}
          placeholder="Mobile Number"
          prefix={<FieldNumberOutlined />}
        />
      </Col>
    </Row>
  );
};

export default UserDetails;
