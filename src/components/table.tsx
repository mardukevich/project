import * as React from 'react';
import { Avatar, Drawer } from 'antd';
import { Table as AntdTable, Button, Layout } from 'antd';

import { ComponentsProps, UserData } from 'common/types';
import { withPagination } from 'components/pagination';

import { Card } from 'components/card';

const Table: React.FC<ComponentsProps> = ({ data }) => {
  const [item, setItem] = React.useState<UserData | undefined>();

  const columns = React.useMemo(() => [
    {
      title: '',
      dataIndex: 'img',
      key: 'img',
      render: (img: string) => <Avatar src={img} shape='circle' size={'small'} />,
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

  return (
    <Layout>
      <Layout.Content>
        <AntdTable 
          onRow={(record) => ({ onClick: () => setItem(record)})}
          dataSource={data} 
          columns={columns} 
          pagination={false} 
          size='small'
          rowKey={'email'}
        />
      </Layout.Content>
      <Drawer 
        title='Карточка пользователя'
        open={item !== undefined} 
        onClose={() => setItem(undefined)}
      >
        {item && <Card 
            name={item.name}
            login={item.login}
            img={item.img}
            address={item.address}
            phone={item.phone}
            email={item.email}
          />
        }
      </Drawer>
    </Layout>
  );
};

const TableWithPagination = withPagination(Table);

export default TableWithPagination;