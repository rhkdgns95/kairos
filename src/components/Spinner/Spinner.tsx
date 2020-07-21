import React from "react";
import { Spin } from "antd";
import styled from "styled-components";

const Spinner: React.FC<{
  text?: string;
  loading: boolean;
}> = ({ text = "Loading...", loading }) => {
  return (
    <Container loading={loading}>
      <Spin tip={text} />
    </Container>
  );
};

const Container = styled.div<{ loading: boolean }>`
  z-index: 3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.82);
  ${(props) => {
    return props.loading
      ? ""
      : "display: none; z-index: -3; pointer-events: none; opacity: 0; transform: scale(0);";
  }}
`;

export default Spinner;
