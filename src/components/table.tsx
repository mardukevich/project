import * as React from 'react';

import { Avatar, Drawer, List } from 'antd';
import { Table as AntdTable, Typography } from 'antd';
import Column from 'antd/es/table/Column';

import { ComponentsProps, ListItemType, UserData } from 'common/types';
import { withPagination } from 'components/pagination';
import { Card } from 'components/card';
import Meta from 'antd/es/card/Meta';

const Sidebar: React.FC<{ onClose: () => void, item?: UserData }> = ({ onClose, item }) => {
  if (item == undefined)
    return null;
  const { login, address, email, phone, img, name } = item;
  const data: ListItemType[] = [
    { title: 'Логин', description: login },
    { title: 'Адрес', description: address },
    { title: 'Телефон', description: phone },
    { title: 'Почта', description: email }
  ]
  return (
  <Drawer open title='Карточка пользователя' onClose={onClose}>
    <Meta
      style={{ 
        padding: '8px',
        borderRadius: '8px', 
        background: '#f3f4f6', 
        display: 'flex', 
        alignItems: 'center' 
      }}
      avatar={<Avatar style={{ marginRight: '8px' }} shape={'circle'} size='large' src={img} />}
      title={name}
    />
    <List 
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta title={item.title} description={item.description} />
        </List.Item>)}
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
        render={(_, record: UserData) => (
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