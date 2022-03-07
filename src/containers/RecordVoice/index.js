import { useState } from "react";
import { Button } from "antd";
import { AudioOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";
import { useFormContext } from "react-hook-form";
import AudioReactRecorder, { RecordState } from "audio-react-recorder";

const RecordVoice = () => {
  const { register, setValue } = useFormContext();

  const [recordState, setRecordState] = useState(null);

  const start = () => setRecordState(RecordState.START);
  const stop = () => setRecordState(RecordState.STOP);
  const onStop = (audio) => setValue("audio", audio);

  return (
    <Row>
      <Col span={12} offset={6}>
        <div style={{ display: "none" }}>
          <AudioReactRecorder state={recordState} onStop={onStop} />
        </div>
        <Button
          style={{ marginTop: "30px" }}
          icon={<AudioOutlined />}
          size="small"
          block
          onClick={start}
          disabled={recordState === "start"}
        >
          Start
        </Button>
        <Button
          style={{ marginBottom: "10px", marginTop: "30px" }}
          icon={<AudioOutlined />}
          size="small"
          block
          onClick={stop}
          disabled={recordState === "stop"}
        >
          Stop
        </Button>
        <input type="hidden" {...register("audio", { required: true })} />
      </Col>
    </Row>
  );
};

export default RecordVoice;
