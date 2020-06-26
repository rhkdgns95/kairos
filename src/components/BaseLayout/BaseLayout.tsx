import React from "react";
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

const { Header, Sider, Content } = Layout;

const BaseLayout: React.FC<any> = ({ children }) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

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
            margin: "30px auto",
            textAlign: "center",
            color: "white",
          }}
        >
          <span>Kairos CMS</span>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            nav 1
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
        </Menu>
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

export default BaseLayout;
