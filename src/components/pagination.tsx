import * as React from 'react';

import { Pagination } from 'antd';
import { ComponentsProps, UserData, Users } from '../types';

interface WithPaginationProps extends ComponentsProps {
  page: number;
  onPageChange(page: number): void;
}

export const withPagination = (WrappedComponent: React.FC<ComponentsProps>) => {
  const addPagination: React.FC<WithPaginationProps> = ({ data, page, onPageChange, onClick }) => {
    const [currentPage, setCurrentPage] = React.useState<number>(page);

    const pageSize = data.length;

    const handleChangePage = (page: number) => {
      onPageChange(page);
      setCurrentPage(page);
    };

    return (
      <>
        <WrappedComponent data={data} onClick={onClick} />
        <Pagination
          showQuickJumper
          current={currentPage}
          pageSize={pageSize}
          total={Users.MaxCount}
          onChange={handleChangePage}
        />
      </>
    );
  };

  return addPagination;
};