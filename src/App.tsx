import React, { useReducer, Reducer, useCallback } from "react";
import { Button, Form, Input, Space } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import DatePicker from "./components/DatePicker";
import BaseLayout from "./components/BaseLayout";

interface Props {}

const App: React.FC<Props> = () => {
  const loggedIn = true;
  return loggedIn ? <UserLoggedIn /> : <UserLoggedOut />;
};

const UserLoggedIn = () => (
  <BaseLayout>
    <div>loggedIn.</div>
  </BaseLayout>
);

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
const UserLoggedOut = () => {
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
  console.log("state: ", state);
  return (
    <Container>
      <Wrapper>
        <DatePicker />
        <Space direction="vertical">
          <MainView>
            <>군산 등대어플 관리자페이지</>
          </MainView>
          <Form
            name="normal_login"
            className="login-form"
            onFinish={(data) => {
              console.log("submit: ", data);
            }}
          >
            <Form.Item
              name="username"
              style={{
                marginBottom: "7px",
              }}
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="ID"
                name="id"
                onChange={onChange}
                value={state.id}
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
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
  width: 200px;
  height: 200px;
  background-color: #dfdfdf;
`;

export default App;
