import React from "react";
import { Row, Col } from "antd";

import StepTracker from "../StepTracker";

const Landing = () => {
  return (
    <Row>
      <Col span={12} offset={6}>
        <StepTracker />
      </Col>
    </Row>
  );
};

export default Landing;
