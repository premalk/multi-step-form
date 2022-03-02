import React from "react";
import { Steps, Button, message } from "antd";
import { Row, Col } from "antd";
import {
  UserOutlined,
  AudioOutlined,
  SmileOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import UserDetails from "../UserDetails";
import RecordVoice from "../RecordVoice";
import Password from "../Password";
import Terms from "../Terms";

const { Step } = Steps;

const steps = [
  {
    title: "Details",
    content: <UserDetails />,
    icon: <UserOutlined />,
  },
  {
    title: "Record audio",
    content: <RecordVoice />,
    icon: <AudioOutlined />,
  },
  {
    title: "Password",
    content: <Password />,
    icon: <LoginOutlined />,
  },
  {
    title: "Terms & conditions",
    content: <Terms />,
    icon: <SmileOutlined />,
  },
];

const StepTracker = () => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <Row>
        <Col span={12} offset={6}>
          <div
            className="steps-action"
            style={{
              display: "flex",
              justifyContent: current > 0 ? "space-between" : "flex-end",
            }}
          >
            {current > 0 && <Button onClick={() => prev()}>Previous</Button>}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                onClick={() => message.success("Processing complete!")}
              >
                Done
              </Button>
            )}
            {current < steps.length - 1 && (
              <Button type="primary" onClick={() => next()}>
                Next
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default StepTracker;
