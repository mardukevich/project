import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import {  Radio  } from 'antd';

export type ViewType = 'table' | 'card';

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
      <Radio.Button value="table">Таблица</Radio.Button>
      <Radio.Button value="card">Карточка</Radio.Button>
    </Radio.Group>
}


