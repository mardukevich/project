import * as React from 'react';

import { Card as AntdCard, Row, Col, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';

import { ComponentsProps, UserData } from 'common/types';
import { withPagination } from 'components/pagination';
import { Divider } from 'components/components';

export const Card: React.FC<UserData> = ({ img, name, login, address, email, phone }) => {
  return (
  <AntdCard>
    <Meta
      style={{ padding: '8px', borderRadius: '8px', background: '#f3f4f6' }}
      avatar={<Avatar src={img} />}
      title={name}
      description={login}
    />
    <p>Address: {address}</p>
    <Divider />
    <p>Email: {email}</p>
    <Divider />
    <p>Phone: {phone}</p>
  </AntdCard>
  )
};

const Cards: React.FC<ComponentsProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <Card {...item} />
        </Col>
      ))}
    </Row>
  );
};

export const CardsWithPagination = withPagination(Cards)
