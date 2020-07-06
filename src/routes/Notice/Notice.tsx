import React from "react";
import styled from "styled-components";
import NoticeForm from "./Notice.Form";

interface Props {}

const Notice: React.FC<Props> = () => <Container>
  <NoticeForm />
</Container>;

const Container = styled.div``;

export default Notice;
