import * as React from 'react';
import { Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Table as AntdTable, Button, Layout } from 'antd';

import { ComponentsProps, UserData } from '../types';
import { withPagination } from './pagination';

import { Card } from './card';

const { Text } = Typography;

const SideBar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Layout.Sider
      style={{
        minWidth: '420px',
        zIndex: 100,
        height: '100%',
        top: 0, 
        right: 0, 
        bottom: 0,
        left: 'auto', 
        position: 'fixed'
      }}
      theme="light"
    >
      {children}
   </Layout.Sider>
   );
};

const Table: React.FC<ComponentsProps> = ({ data }) => {
  const [item, setItem] = React.useState<UserData | undefined>();

  const columns = React.useMemo(() => [
    {
      title: '',
      dataIndex: 'img',
      key: 'img',
      render: (img: string) => <img src={img} alt="Avatar" style={{ width: '50%', borderRadius: '50%' }} />,
    },
    {
      title: 'Ф.И.О',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Логин',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Адрес',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Телефон',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
  ], []);

  const CardHeader = (
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <Text>Карточка пользователя</Text>
      <Button icon={<CloseOutlined />} onClick={() => setItem(undefined)} />
    </div>
  )

  return (
    <Layout>
      <Layout.Content>
        <AntdTable 
          onRow={(record) => {
            return {
              onClick: () => setItem(record), // click row
            }}}
          dataSource={data} 
          columns={columns} 
          pagination={false} 
          size='small'
          rowKey={'email'}
        />
      </Layout.Content>
      {item &&
        <SideBar>
          <Card 
            header={CardHeader}
            name={item.name}
            login={item.login}
            img={item.img}
            address={item.address}
            phone={item.phone}
            email={item.email}
          />
        </SideBar>
    }
    </Layout>
  );
};

const TableWithPagination = withPagination(Table);

export default TableWithPagination;