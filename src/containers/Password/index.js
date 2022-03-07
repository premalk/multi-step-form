import { useFormContext, Controller } from "react-hook-form";
import { Input, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Password = () => {
  const { control } = useFormContext();

  return (
    <Row>
      <Col span={12} offset={6}>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <Input.Password
              placeholder="Password"
              style={{ marginTop: "30px", marginBottom: "5px" }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              {...field}
            />
          )}
        />

        <Controller
          name="confirmPassword"
          control={control}
          render={({ field }) => (
            <Input.Password
              placeholder="Re-enter password"
              style={{ marginBottom: "10px" }}
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              {...field}
            />
          )}
        />
      </Col>
    </Row>
  );
};

export default Password;
