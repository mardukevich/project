import * as React from 'react';
import { Pagination as ANTDPagination } from 'antd';
import { type ComponentsProps, Users } from 'common/types';

interface WithPaginationProps extends ComponentsProps {
  page: number;
  onPageChange(page: number): void;
  pageSize?: number;
}

export const withPagination = (WrappedComponent: React.FC<ComponentsProps>) => {
  const Pagination: React.FC<WithPaginationProps> = ({ data, page, onPageChange, pageSize = 20 }) => {

    const handleChangePage = (newPage: number) => {
      onPageChange(newPage);
    };

    return (
      <>
        <WrappedComponent data={data} />
        <ANTDPagination
          showQuickJumper
          current={page} 
          pageSize={pageSize}
          showSizeChanger={false}
          total={Users.MaxCount}
          onChange={handleChangePage}
        />
      </>
    );
  };

  return React.memo(Pagination);  
}
