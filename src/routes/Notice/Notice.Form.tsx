import React from "react";
import styled from "styled-components";
import { Form, Space, Button, Input, Table } from "antd";

const { TextArea } = Input;

/** 테이블 데이터의 타입 */
interface Data {
  /** key 값 */
  key: string;
  /** 제목 */
  title: string;
  /** 내용 */
  description: string;
  /** 작성일자 */
  createdAt: string;
  /** 종료일자 */
  endedAt: string;
}

/** 폼의 레이아웃 */
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 20 },
};

/** 테이블의 칼럼 */
const columns = [
  {
    title: "작성일자",
    dataIndex: "createdAt",
  },
  {
    title: "종료일자",
    dataIndex: "endedAt",
  },
  {
    title: "제목",
    dataIndex: "title",
  },
  {
    title: "내용",
    dataIndex: "description",
  },
];

/** 테이블의 임시 데이터 */
const data: Array<Data> = [
  {
    key: "uuid-1",
    title: "Herry Porter",
    description: "New York No. 1 Lake Park",
    createdAt: "2020-06-01",
    endedAt: "2020-06-08",
  },
  {
    key: "uuid-2",
    title: "Jim Green",
    description: "London No. 1 Lake Park",
    createdAt: "2020-06-02",
    endedAt: "2020-06-09",
  },
  {
    key: "uuid-3",
    title: "Joe Black",
    description: "Sidney No. 1 Lake Park",
    createdAt: "2020-06-03",
    endedAt: "2020-06-10",
  },
  {
    key: "uuid-4",
    title: "Bird Box",
    description: "Description...",
    createdAt: "2020-06-04",
    endedAt: "2020-06-11",
  },
];

const onFinish = (values: any) => {
  console.log(values);
};

const NoticeForm: React.FC = () => {
  return (
    <Container>
      <Space
        direction="vertical"
        style={{
          width: "100%",
        }}
      >
        <Form {...layout} name="nest-messages" onFinish={onFinish}>
          <Space
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "30px 0",
              width: "100%",
            }}
          >
            <Space
              direction="vertical"
              style={{
                minWidth: "400px",
              }}
            >
              <Form.Item
                style={{
                  marginBottom: "10px",
                }}
                name={"keyword"}
                label="제목"
                // rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                style={{
                  marginBottom: "10px",
                }}
                name={"keyword"}
                label="내용"
                // rules={[{ required: true }]}
              >
                <TextArea rows={5} />
              </Form.Item>
            </Space>
            <Space direction="vertical">
              <Button type="primary">공지알림 업데이트</Button>
              <Button type="primary" danger>
                현재 알림 종료
              </Button>
            </Space>
          </Space>
        </Form>
        <Table
          onRow={(record) => {
            return {
              onClick: () => {
                console.log("data: ", record);
              },
            };
          }}
          columns={columns}
          dataSource={data}
          size="middle"
        />
      </Space>
    </Container>
  );
};

const Container = styled.div``;

export default NoticeForm;
