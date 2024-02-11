import * as React from 'react';
import { Card as AntdCard, Row, Col } from 'antd';
import { ComponentsProps } from '../types';
import { withPagination } from './pagination';

const Card: React.FC<ComponentsProps> = ({ data }) => {
  return (
    <Row gutter={[16, 16]}>
      {data.map((item, index) => (
        <Col key={index} xs={24} sm={12} md={8} lg={6}>
          <AntdCard>
            <img src={item.img} alt="Avatar" style={{ width: '100%', borderRadius: '50%' }} />
            <Divider />
            <p><strong>Name:</strong> {item.name}</p>
            <Divider />
            <p><strong>Login:</strong> {item.login}</p>
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
