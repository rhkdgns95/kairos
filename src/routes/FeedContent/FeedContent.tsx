import React from "react";
import styled from "styled-components";
import { Form, Input, Button, Space } from "antd";
import DatePicker from "../../components/DatePicker";

const { RangePicker } = DatePicker;

interface Props {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const onFinish = (values: any) => {
  console.log(values);
};

const FeedContent: React.FC<Props> = () => (
  <Container>
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
      <ExtendedSpace
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <ExtendedSpace
          style={{
            display: "block",
          }}
        >
          <Form.Item
            style={{
              marginBottom: "10px",
            }}
            name={"keyword"}
            label="키워드검색"
            // rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="rangepicker"
            label="검색기간"
            style={{
              marginBottom: 10,
              marginRight: 7,
            }}
          >
            <RangePicker format="YYYY-MM-DD" />
          </Form.Item>
        </ExtendedSpace>
        <ExtendedSpace>
          <ExtendedButton bg="#ffc107" type="primary">
            선택 숨기기
          </ExtendedButton>
          <Button type="primary">숨기기 해제</Button>
          <ExtendedButton bg="#ff5722" type="primary">
            선택 삭제
          </ExtendedButton>
        </ExtendedSpace>
      </ExtendedSpace>
      <Form.Item>
        <Button>검색</Button>
      </Form.Item>
    </Form>
    FeedContent
  </Container>
);

const Container = styled.div``;
const ExtendedButton = styled(Button)<{ bg: string }>`
  &.ant-btn-primary {
    border-color: ${(props) => props.bg};
    background-color: ${(props) => props.bg};
  }
`;
const ExtendedSpace = styled(Space)`
  margin: 0 auto;
`;
export default FeedContent;
