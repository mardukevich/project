import * as React from 'react';
import { ComponentsProps, type UserData } from '../types';
import { Table as AntdTable} from 'antd';
import { withPagination } from './pagination';

const Table: React.FC<ComponentsProps> = ({ data }) => {
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

  return <AntdTable 
    dataSource={data} 
    columns={columns} 
    pagination={false} 
    size='small'
  />;
};

const TableWithPagination = withPagination(Table);

export default TableWithPagination;