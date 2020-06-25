import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import ko from "antd/es/locale/ko_KR";
import App from "./App";
import "./index.css";
import { GlobalStyles } from "./styles/global-styles";

ReactDOM.render(
  <ConfigProvider locale={ko}>
    <App />
    <GlobalStyles />
  </ConfigProvider>,
  document.getElementById("root")
);
