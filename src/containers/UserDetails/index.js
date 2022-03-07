import { useFormContext, Controller } from "react-hook-form";
import { Input } from "antd";
import {
  UserOutlined,
  FieldNumberOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Row, Col } from "antd";

import FieldFeedback from "../../components/FieldFeedback";

const UserDetails = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Row>
      <Col span={12} offset={6}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <Input
              size="large"
              style={{ marginTop: "30px", marginBottom: "5px" }}
              placeholder="Email"
              prefix={<MailOutlined />}
              {...field}
            />
          )}
        />
        <FieldFeedback message={errors?.email?.message} />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              size="large"
              style={{ marginTop: "5px", marginBottom: "5px" }}
              placeholder="Name"
              prefix={<UserOutlined />}
              {...field}
            />
          )}
        />
        <FieldFeedback message={errors?.name?.message} />
        <Controller
          name="number"
          control={control}
          render={({ field }) => (
            <Input
              size="large"
              style={{ marginTop: "5px", marginBottom: "10px" }}
              placeholder="Mobile number"
              prefix={<FieldNumberOutlined />}
              {...field}
            />
          )}
        />
        <FieldFeedback message={errors?.number?.message} />
      </Col>
    </Row>
  );
};

export default UserDetails;
