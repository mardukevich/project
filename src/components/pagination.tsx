import * as React from 'react';

import { Pagination } from 'antd';
import { UserData, Users } from '../types';

interface WithPaginationProps {
  data: UserData[];
  onPageChange(page: number): void;
}

export const withPagination = (WrappedComponent: React.FC<any>) => {
  const addPagination: React.FC<WithPaginationProps> = ({ data, onPageChange }) => {
    const [currentPage, setCurrentPage] = React.useState<number>(1);

    const pageSize = data.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = data.slice(startIndex, endIndex);

    const handleChangePage = (page: number) => {
      onPageChange(page);
      setCurrentPage(page);
    };

    return (
      <>
        <WrappedComponent data={paginatedData} />
        <Pagination
          showQuickJumper
          current={currentPage}
          pageSize={pageSize}
          total={Users.MaxCount}
          onChange={handleChangePage}
          style={{ marginTop: '16px' }}
        />
      </>
    );
  };

  return addPagination;
};