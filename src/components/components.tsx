import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import {  Radio  } from 'antd';

import { useFetchPage } from '../common';
import { UserData, ViewType } from '../types';
import TableWithPagination from './table';
import CardsWithPagination from './card';

export const ViewSwitch: React.FC<{ onChange: (view: ViewType) => void }> = ({ onChange }) => {
  const [searchParams, setSearchParams] = useSearchParams({ tab: 'table' });

  React.useEffect(() => {
    onChange(searchParams.get('tab') as ViewType ?? 'table');
  }, [])

  return <Radio.Group 
    value={searchParams.get('tab')}
    onChange={(e) => {
      onChange(e.target.value)
      searchParams.set('tab', e.target.value)
      setSearchParams(searchParams)
    }}>
      <Radio.Button value='table'>Таблица</Radio.Button>
      <Radio.Button value='card'>Карточка</Radio.Button>
    </Radio.Group>
}

interface ViewProps {
  type: ViewType;
  onClick: (item?: UserData) => void;
}

export const View: React.FC<ViewProps> = ({ type, onClick }) => {
  const [searchParams, setSearchParams] = useSearchParams({ page: '0' });

  const [data, error] = useFetchPage(+(searchParams.get('page') ?? 0)) 

  const handleChangePage = (page: number) => { 
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  }

  const commonProps = {
    data: data ?? [],
    page: +(searchParams.get('page') ?? 0),
    onPageChange: handleChangePage,
    onClick
  }

  return <>
  {
    type == 'card' 
    ? <CardsWithPagination {...commonProps} /> 
    : <TableWithPagination {...commonProps} />
  }
  </>
}


