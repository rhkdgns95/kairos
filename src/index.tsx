import dotenv from "dotenv";
dotenv.config();

import React from "react";
import ReactDOM from "react-dom";
import { ConfigProvider } from "antd";
import ko from "antd/es/locale/ko_KR";
import App from "./App";
import "./index.css";
import { GlobalStyles } from "./styles/global-styles";
import { AppProvider } from "./hooks/useAppContext";

ReactDOM.render(
  <ConfigProvider locale={ko}>
    <AppProvider>
      <App />
    </AppProvider>
    <GlobalStyles />
  </ConfigProvider>,
  document.getElementById("root")
);
