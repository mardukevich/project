import * as React from 'react';

import { Card as AntdCard, Row, Col, Avatar } from 'antd';
import { Typography } from 'antd';

import { ComponentsProps, UserData } from 'types';
import { withPagination } from 'components/pagination';
import { Divider } from 'components/components';

const { Text } = Typography;

type Props = Pick<UserData, 'img' | 'name' | 'login'>;

const CardHeader: React.FC<Props> = ({ img, name, login }) => {
  return (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'flex-start',
    borderRadius: '8px',
    background: '#F3F4F6',
    padding: '16px'
  }}>
    <Avatar src={img} size='large' shape='circle' />
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '8px' }}>
      <Text style={{ color: 'blue' }}>{name}</Text>
      <Text>{login}</Text>
    </div>
  </div>
  )};

interface CardProps extends UserData {
  header?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ img, name, login, address, email, phone, header }) => {
  return (
  <AntdCard>
    {header}
    <CardHeader img={img} name={name} login={login} />
    <Divider />
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
