import React, { useState } from "react";
import styled from "styled-components";
import { Form, Space, Input, Button } from "antd";

interface Props {}

/** 폼의 레이아웃 */
const layout = {
  labelCol: { span: 10 },
  wrapperCol: { span: 20 },
};

const onFinish = (values: any) => {
  console.log(values);
};

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);
  const onChange: React.ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    const { value } = target;
    setValue(value);
  };
  return {
    value,
    onChange,
  };
};

const ManagerInfoForm: React.FC<Props> = () => {
  /** 아이디 */
  const formId = useInput("");
  /** 현재 비밀번호 */
  const formPassword = useInput("");
  /** 새 비밀번호 */
  const formConfirmPassword = useInput("");
  /** 새 비밀번호 확인 */
  const formNewPassword = useInput("");
  /** ID 및 PW찾기용 Email */
  const formEmail = useInput("");

  return (
    <Container>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Space
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px 0",
            width: "100%",
          }}
        >
          <Space
            direction="vertical"
            style={{
              minWidth: "400px",
            }}
          >
            {/* 아이디 */}
            <Form.Item
              style={{
                marginBottom: "10px",
              }}
              label="아이디"
              // rules={[{ required: true }]}
            >
              <Input {...formId} />
            </Form.Item>
            {/* 패스워드 */}
            <Form.Item
              style={{
                marginBottom: "10px",
              }}
              label="현재 비밀번호"
              // rules={[{ required: true }]}
            >
              <Input {...formPassword} />
            </Form.Item>
            {/* 새 비밀번호 */}
            <Form.Item
              style={{
                marginBottom: "10px",
              }}
              label="새 비밀번호"
              // rules={[{ required: true }]}
            >
              <Input {...formNewPassword} />
            </Form.Item>
            {/* 새 비밀번호 확인 */}
            <Form.Item
              style={{
                marginBottom: "10px",
              }}
              label="새 비밀번호 확인"
              // rules={[{ required: true }]}
            >
              <Input {...formConfirmPassword} />
            </Form.Item>
            {/* ID 및 PW찾기용 Email */}
            <Form.Item
              style={{
                marginBottom: "10px",
              }}
              label="ID 및 PW찾기용 Email"
              // rules={[{ required: true }]}
            >
              <Input {...formEmail} />
            </Form.Item>
          </Space>
        </Space>
        <Button type="primary">수정완료</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  form {
    text-align: center;
    button {
      // min-width: 250px;
      margin: 0 auto;
    }
  }
`;

export default ManagerInfoForm;
