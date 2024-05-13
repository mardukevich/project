import * as React from 'react';

import { Card as AntdCard, Row, Col, Avatar, Typography, List } from 'antd';
import Meta from 'antd/es/card/Meta';

import { ComponentsProps, ListItemType, UserData } from 'common/types';
import { withPagination } from 'components/pagination';

export const Card: React.FC<UserData> = ({ img, name, login, address, email, phone }) => {
  
  const contactDetails: ListItemType[] = React.useMemo(() => [
    { title: 'Адрес:', description: address },
    { title: 'Телефон:', description: phone },
    { title: 'E-mail:', description: email }
  ], []);
 
  return (
    <AntdCard>
      <Meta
        style={{ padding: '8px', borderRadius: '8px', background: '#f3f4f6' }}
        avatar={<Avatar shape="circle" size="large" src={img} />}
        title={name}
        description={login}
      />
      <List
        style={{ fontSize: '14px' }}
        itemLayout="horizontal"
        dataSource={contactDetails}
        renderItem={({ title, description }) => (
          <List.Item>
            <List.Item.Meta 
              title={<Typography.Text type="secondary">{title}</Typography.Text>}
              description={<Typography.Text>{description}</Typography.Text>} 
            />
          </List.Item>
        )}
      />
    </AntdCard>
  );
};

const Cards: React.FC<ComponentsProps> = ({ data }) => (
    <Row gutter={[16, 16]}>
      {data.map((user, index) => (
      <Col key={index} xs={24} sm={12} md={8} lg={6}>
        <Card {...user} />
      </Col>
      ))}
  </Row>
);

export const CardsWithPagination = withPagination(Cards)
