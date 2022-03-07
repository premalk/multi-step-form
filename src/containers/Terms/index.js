import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, Row, Col } from "antd";

const Terms = () => {
  const { control } = useFormContext();

  return (
    <Row>
      <Col span={12} offset={6}>
        <Controller
          name="acknowledgement"
          control={control}
          render={() => (
            <Checkbox style={{ marginTop: "30px", marginBottom: "10px" }}>
              Terms & conditions
            </Checkbox>
          )}
        />
      </Col>
    </Row>
  );
};

export default Terms;
