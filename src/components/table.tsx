import * as React from 'react';
import { type UserData } from '../types';
import { Table as AntdTable} from 'antd';
import { withPagination } from './pagination';

interface MyTableProps {
  data?: UserData[];
}

const Table: React.FC<MyTableProps> = ({ data }) => {
  const columns = React.useMemo(() => [
    {
      title: 'Avatar',
      dataIndex: 'img',
      key: 'img',
      render: (img: string) => <img src={img} alt="Avatar" style={{ width: '50px', borderRadius: '50%' }} />,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Login',
      dataIndex: 'login',
      key: 'login',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
  ], []);

  return <AntdTable dataSource={data} columns={columns} />;
};

const TableWithPagination = withPagination(Table);

export default TableWithPagination;