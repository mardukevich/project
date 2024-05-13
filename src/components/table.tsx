import * as React from 'react';

import { Avatar, Button, Drawer, List, Space } from 'antd';
import { Table as AntdTable, Typography } from 'antd';
import Column from 'antd/es/table/Column';
import Meta from 'antd/es/card/Meta';
import { CloseOutlined } from '@ant-design/icons';

import { ComponentsProps, ListItemType, UserData } from 'common/types';
import { withPagination } from 'components/pagination';

const Sidebar: React.FC<{ onClose: () => void, item?: UserData }> = ({ onClose, item }) => {
  if (!item)
    return null;

  const { login, address, phone, email, img, name } = item;

  const data = React.useMemo(() => [
    { title: 'Логин', description: login },
    { title: 'Адрес', description: address },
    { title: 'Телефон', description: phone },
    { title: 'Почта', description: email }
  ], []);

  return (
  <Drawer 
    open 
    title='Карточка пользователя' 
    closeIcon={null}
    extra={
      <Space>
        <Button type='text' onClick={onClose}><CloseOutlined /></Button>
      </Space>
  }
  >
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
        <List.Item.Meta 
          style={{ padding: '8px' }}
          title={<Typography.Text style={{ padding: '8px 0' }} type='secondary'>{item.title}</Typography.Text>} 
          description={<Typography.Text>{item.description}</Typography.Text>} 
        />)
    }
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