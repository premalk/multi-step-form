import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Steps, Button, message } from "antd";
import { Row, Col } from "antd";
import {
  UserOutlined,
  AudioOutlined,
  SmileOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import UserDetails from "../UserDetails";
import RecordVoice from "../RecordVoice";
import Password from "../Password";
import Terms from "../Terms";

import useUserDetails from "../../hooks/useUserDetails";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = [
  yup.object({
    email: yup.string().email().required("Enter valid email"),
    name: yup.string().required("Enter valid name"),
    number: yup.string().matches(phoneRegExp, "Mobile number is not valid"),
  }),

  yup.object({
    audio: yup.object().required("Record a audio"),
  }),
  yup.object({
    password: yup.string().required("Enter valid password"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  }),
  yup.object({
    acknowledgement: yup.boolean().oneOf([true], "Accept terms & conditions."),
  }),
];

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

  const currentValidationSchema = schema[current];

  const formFields = useForm({
    resolver: yupResolver(currentValidationSchema),
  });
  const { mutate } = useUserDetails();

  const next = (data) => {
    console.log(data);
    if (current === steps.length - 1) {
      mutate({ data });
      message.success("Processing complete!");
      return;
    }
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <FormProvider {...formFields}>
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
            <Button type="primary" onClick={formFields.handleSubmit(next)}>
              {current === steps.length - 1 ? "Done" : "Next"}
            </Button>
          </div>
        </Col>
      </Row>
    </FormProvider>
  );
};

export default StepTracker;
