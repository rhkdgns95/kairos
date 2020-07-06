import React, { useMemo } from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { useState, useCallback } from "react";
import "./index.css";
import styled from "styled-components";
import { Button } from "antd";
import { Link, useHistory } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const BaseLayout: React.FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const {
    location: { pathname },
  } = useHistory();

  const toggleCollapsed = useCallback(() => {
    setCollapsed((prevState) => !prevState);
  }, []);

  return (
    <Layout
      style={{
        height: "100vh",
      }}
    >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div
          className="logo"
          style={{
            fontSize: "20px",
            marginTop: useMemo(() => (collapsed ? 30 : 50), [collapsed]),
            textAlign: "center",
            color: "white",
            transition: ".2s",
          }}
        >
          <span>Kairos CMS</span>
        </div>
        <ExtendedMenu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[pathname]}
          onSelect={(data) => {
            console.log("DATA: ", data);
          }}
        >
          <Menu.Item
            key={"/"}
            icon={<UserOutlined />}
            onChange={(data) => {
              console.log("DATA: ", data);
            }}
          >
            <Link to="/">피드 콘텐츠 관리</Link>
          </Menu.Item>
          <Menu.Item key={"/notice"} icon={<VideoCameraOutlined />}>
            <Link to="notice">공지 알림</Link>
          </Menu.Item>
          <Menu.Item
            onSelect={(data) => {
              console.log("DATA: ", data);
            }}
            key={"/info"}
            icon={<UploadOutlined />}
          >
            <Link to="info">관리자 정보수정</Link>
          </Menu.Item>
        </ExtendedMenu>
        <LogoutButton type="primary" danger>
          로그아웃
        </LogoutButton>
      </Sider>
      <Layout
        className="site-layout"
        style={{
          position: "relative",
          height: "100%",
          border: "2px solid green",
        }}
      >
        <Header className="site-layout-background" style={{ paddingLeft: 10 }}>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: "trigger",
              onClick: toggleCollapsed,
            }
          )}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          <Screen>{children}</Screen>
        </Content>
      </Layout>
    </Layout>
  );
};

const Screen = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
  bottom: 0;
  right: 0;
  border: 1px solid red;
  height: auto;
  overflow-y: scroll;
  padding: 24px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  /* Track - ScrollBar-Track */
  ::-webkit-scrollbar-track {
    background: #e6e6e6;
    border-radius: 10px;
  }

  /* Handle - ScrollBar-Circle */
  ::-webkit-scrollbar-thumb {
    background: #9ea7af;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer !important;
    &:hover {
      background: #868b90;
    }
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:active {
    background: #65717b;
    cursor: pointer;
  }
`;
const ExtendedMenu = styled(Menu)`
  display: flex;
  top: 120px;
  flex-flow: column;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const LogoutButton = styled(Button)`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
`;

export default BaseLayout;
