import styled from "styled-components";
import { object } from "prop-types";

const ErrorField = styled.div`
  color: red;
  margin-top: 5px;
`;

const FieldFeedback = (message) => {
  return <ErrorField>{message?.message}</ErrorField>;
};

FieldFeedback.prototype = {
  message: object,
};

export default FieldFeedback;
