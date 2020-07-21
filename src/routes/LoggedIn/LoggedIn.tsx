import React, { Reducer, useCallback, useReducer } from "react";
import { Button, Form, Input, Space, message } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useAppContext } from "../../hooks/useAppContext";

interface Props {}

interface ReducerState {
  id: string;
  password: string;
}

interface ReducerAction {
  name: string;
  value: string;
  type: "onChange";
}

const reducer: Reducer<ReducerState, ReducerAction> = (prevState, action) => {
  switch (action.type) {
    case "onChange":
      return {
        ...prevState,
        [action.name]: action.value,
      };
  }
};
const initState: ReducerState = {
  id: "",
  password: "",
};

const LoggedIn: React.FC<Props> = () => {
  const { login } = useAppContext();
  const [state, dispatch] = useReducer(reducer, initState);
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({
        name: event.target.name,
        value: event.target.value,
        type: "onChange",
      }),
    []
  );
  const handleLogin = useCallback((data) => {
    if (data.username === process!.env.USER_ID) {
      if (data.password === process.env.USER_PASSWORD) {
        setTimeout(() => {
          login();
        }, 1000);
      } else {
        message.error("비밀번호가 일치하지 않습니다.");
      }
    } else {
      message.error("존재하지 않는 아이디입니다.");
    }
    // console.log("DAT: ", data);
  }, []);

  return (
    <Container>
      <Wrapper>
        <Space direction="vertical">
          <MainView>
            <>군산 등대어플 관리자페이지</>
          </MainView>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={handleLogin}
          >
            <Form.Item
              name="username"
              style={{
                marginBottom: "7px",
              }}
              rules={[{ required: true, message: "아이디를 입력해주세요." }]}
            >
              <Input
                size="large"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="ID"
                name="id"
                onChange={onChange}
                value={state.id}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: "패스워드를 입력해주세요." }]}
            >
              <Input
                size="large"
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                name="password"
                onChange={onChange}
                value={state.id}
              />
            </Form.Item>
            <Form.Item>
              <p>
                <a className="login-form-forgot" href="">
                  Forgot id
                </a>
              </p>
              <p>
                <a className="login-form-forgot" href="">
                  Forgot password
                </a>
              </p>
            </Form.Item>
            <Form.Item>
              <Button
                size="large"
                disabled={state.id.length < 1 || state.password.length < 1}
                style={{
                  display: "block",
                  width: "100%",
                }}
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Log in
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div``;
const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const MainView = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 230px;
  height: 230px;
  background-color: #f6f6f6;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.32);
  border-radius: 1px;
  margin-bottom: 25 px;
  font-size: 17px;
`;
export default LoggedIn;
