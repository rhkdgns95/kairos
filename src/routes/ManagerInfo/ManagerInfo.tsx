import React from "react";
import styled from "styled-components";
import ManagerInfoForm from "./ManagerInfo.Form";

interface Props {}

const ManagerInfo: React.FC<Props> = () => (
  <Container>
    <ManagerInfoForm />
  </Container>
);

const Container = styled.div``;

export default ManagerInfo;
