import React, { useState } from "react";
import styled from "styled-components";
import {
  Modal,
  Form,
  Input,
  Button,
  Space,
  Card,
  Checkbox,
  Typography,
  Tooltip,
} from "antd";
import { EyeOutlined } from "@ant-design/icons";
import DatePicker from "components/DatePicker";

const { RangePicker } = DatePicker;
const { Paragraph } = Typography;

interface Props {}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface CardData {
  key: string;
  date: string;
  text: string;
  imgSrc: string;
}

const cards: Array<CardData> = [
  {
    key: "abc",
    date: "2020-02-03",
    text:
      "hello world this is my function hello world hello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello worldhello world this is my function hello world",
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
  {
    key: "bcd",
    date: "2020-02-04",
    text: `Ant Design, a design language for background applications, is refined
    by Ant UED Team. Ant Design, a design language for background
    applications, is refined by Ant UED Team. Ant Design, a design
    language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by
    Ant UED Team. Ant Design, a design language for background
    applications, is refined by Ant UED Team. Ant Design, a design
    language for background applications, is refined by Ant UED Team.`,
    imgSrc:
      "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png",
  },
];

const onFinish = (values: any) => {
  console.log(values);
};

const FeedContent: React.FC<Props> = () => {
  /** 모달 보임 여부 */
  const [visible, setVisible] = useState<boolean>(false);
  /** 모달 보임 여부 */
  const [currentCard, setCurrentCard] = useState<CardData>(cards[0]);

  /** 모달 열기 */
  const showModal = (card: CardData) => {
    setCurrentCard(card);
    setVisible(true);
  };

  /** 모달 닫기 */
  const handleOk = (e: any) => {
    console.log(e);
    setVisible(false);
  };
  /** 모달 닫기2 */
  const handleCancel = (e: any) => {
    console.log(e);
    setVisible(false);
  };

  return (
    <Container>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <ExtendedSpace
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "30px 0",
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
      </Form>
      <Content>
        {/* 카드 콘텐츠 시작 */}
        {cards.map((card) => (
          <CardItem
            key={card.key}
            date={card.date}
            text={card.text}
            imgSrc={card.imgSrc}
            openModal={showModal}
          />
        ))}
        {/* 카드 콘텐츠 종료 */}
      </Content>
      {/* 모달 시작 */}
      <ModalBox>
        <Modal
          title={currentCard.date}
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <ModalImg src={currentCard.imgSrc} />
          <Paragraph
            style={{
              margin: "30px 0",
              maxHeight: 200,
              overflowY: "auto",
            }}
            
            ellipsis={{ rows: 3, expandable: true, symbol: "more",  }}
          >
            {currentCard.text}
          </Paragraph>
        </Modal>
      </ModalBox>
      {/* 모달 종료 */}
    </Container>
  );
};

interface CardItemProps {
  date: string;
  text: string;
  imgSrc: string;
  openModal: (data: CardData) => any;
}
const CardItem: React.FC<CardItemProps> = ({
  date,
  text,
  imgSrc,
  openModal,
}) => (
  <Card
    extra={
      <FlexBox>
        <Checkbox />
        <div>{date}</div>
      </FlexBox>
    }
    style={{ width: 300, margin: 5 }}
    cover={<img alt="example" src={imgSrc} />}
    actions={[
      <Tooltip title="자세히 보기">
        <EyeOutlined
          onClick={() =>
            openModal({
              key: "xxx",
              date,
              text,
              imgSrc,
            })
          }
        />
      </Tooltip>,
    ]}
  >
    <Paragraph
      ellipsis={{ rows: 3, expandable: false, symbol: "..." }}
      style={{ margin: 0 }}
    >
      {text}
    </Paragraph>
  </Card>
);

const Container = styled.div`
  .ant-card-actions > li > span {
    cursor: default;
    .anticon svg {
      cursor: pointer;
    }
  }
  .ant-card-body {
    padding: 10px 20px;
    height: 100px;
  }
  .ant-card-extra {
    width: 100%;
    margin-left: 0;
    margin-right: auto;
    &::after {
      content: "";
      float: none;
      clear: both;
    }
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
`;
const ExtendedButton = styled(Button)<{ bg: string }>`
  &.ant-btn-primary {
    border-color: ${(props) => props.bg};
    background-color: ${(props) => props.bg};
  }
`;
const ExtendedSpace = styled(Space)`
  margin: 0 auto;
`;
const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
const ModalBox = styled.div`
  /* 모달 버튼 없애기 */
  .ant-btn {
    display: none;
  }
`;
const ModalImg = styled.img`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

export default FeedContent;
