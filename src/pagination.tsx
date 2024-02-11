import * as React from 'react';

import { Pagination } from 'antd';
import { UserData, Users } from './common';

interface WithPaginationAntdProps {
  data: UserData[];
  pageSize: number;
}

export const withPaginationAntd = (WrappedComponent: React.FC<any>) => {
  const WithPaginationAntd: React.FC<WithPaginationAntdProps> = ({ data, pageSize }) => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    const handleChangePage = (page: number) => {
      setCurrentPage(page);
    };

    return (
      <div>
        <WrappedComponent data={paginatedData} />
        <Pagination
          showQuickJumper
          current={currentPage}
          pageSize={Users.PerPage}
          total={Users.MaxCount}
          onChange={handleChangePage}
          style={{ marginTop: '16px' }}
        />
      </div>
    );
  };

  return WithPaginationAntd;
};