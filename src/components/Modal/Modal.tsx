import React from "react";
import { Modal as AntModal, Button, Typography } from "antd";
import { useState } from "react";

const { Paragraph } = Typography;

interface Props {
  date: string;
  text: string;
}
const Modal: React.FC<Props> = ({ date, text }) => {
  const [visible, setVisible] = useState<boolean>(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <AntModal
        title={date}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: "more" }}>
          {text}
        </Paragraph>
      </AntModal>
    </div>
  );
};

export default Modal;
