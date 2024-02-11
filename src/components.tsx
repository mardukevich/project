import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import {  Radio  } from 'antd';

import { useFetchPage } from './common';
import { ViewType } from './types';



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
  onClicked: (item: any) => void;
}

export const View: React.FC<ViewProps> = (props) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [data, error] = useFetchPage(+(searchParams.get('page') ?? 0)) 

  return <>
    {data}
  </>
}


