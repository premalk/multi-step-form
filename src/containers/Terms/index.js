import { useFormContext, Controller } from "react-hook-form";
import { Checkbox, Row, Col } from "antd";
import { useEffect, useState } from "react";

const Terms = () => {
  const { control, setValue } = useFormContext();
  const [checked, setChecked] = useState(false);

  const onChecked = () => setChecked(!checked);

  useEffect(() => {
    setValue("acknowledgement", checked);
  }, [checked]);

  return (
    <Row>
      <Col span={12} offset={6}>
        <Controller
          name="acknowledgement"
          control={control}
          render={() => (
            <Checkbox
              style={{ marginTop: "30px", marginBottom: "10px" }}
              checked={checked}
              onChange={onChecked}
            >
              Terms & conditions
            </Checkbox>
          )}
        />
      </Col>
    </Row>
  );
};

export default Terms;
