import * as React from 'react';
import { Card as AntdCard, Row, Col, Avatar, Flex } from 'antd';
import { ComponentsProps, UserData } from '../types';
import { withPagination } from './pagination';
import { Typography } from 'antd';

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
      <Text>{name}</Text>
      <Text>{login}</Text>
    </div>
  </div>
  )};

const Card: React.FC<ComponentsProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <AntdCard>
            <CardHeader img={item.img} name={item.name} login={item.login} />
            <Divider />
            <p><strong>Address:</strong> {item.address}</p>
            <Divider />
            <p><strong>Email:</strong> {item.email}</p>
            <Divider />
            <p><strong>Phone:</strong> {item.phone}</p>
          </AntdCard>
        </Col>
      ))}
    </Row>
  );
};

const Divider: React.FC = () => <div style={{ margin: '8px 0', borderBottom: '1px solid #f0f0f0' }} />;

const CardWithPagination = withPagination(Card)

export default CardWithPagination;
