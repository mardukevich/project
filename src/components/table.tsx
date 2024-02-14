import * as React from 'react';

import { Avatar, Drawer } from 'antd';
import { Table as AntdTable, Typography } from 'antd';
import Column from 'antd/es/table/Column';

import { ComponentsProps, UserData } from 'common/types';
import { withPagination } from 'components/pagination';
import { Card } from 'components/card';

const Sidebar: React.FC<{ onClose: () => void, item?: UserData }> = ({ onClose, item }) => {
  if (item == undefined)
    return null;
  return (
  <Drawer open title='Карточка пользователя' onClose={onClose}>
    <Card 
      name={item.name}
      login={item.login}
      img={item.img}
      address={item.address}
      phone={item.phone}
      email={item.email}
    />
  </Drawer>
  )
};

const Table: React.FC<ComponentsProps> = ({ data }) => {
  const [item, setItem] = React.useState<UserData | undefined>();

  return (
    <>
    <AntdTable 
      onRow={(record) => ({ onClick: () => setItem(record)})}
      dataSource={data} 
      pagination={false} 
      size='small'
      rowKey={'email'}
    >
      <Column 
        title="Ф.И.О" 
        dataIndex="name" 
        key="name" 
        render={(v, record: UserData) => (
          <>
            <Avatar src={record.img} shape='circle' size={'default'} />
            <Typography.Text style={{ paddingLeft: '8px' }}>{record.name}</Typography.Text>
          </>
        )}/>
      <Column title="Логин" dataIndex="login" key="login" />
      <Column title="Адрес" dataIndex="address" key="address" />
      <Column title="Телефон" dataIndex="phone" key="phone" />
      <Column title="E-mail" dataIndex="email" key="email" />
    </AntdTable>
    <Sidebar item={item} onClose={() => setItem(undefined)}/>
    </>
  );
};

const TableWithPagination = withPagination(Table);

export default TableWithPagination;