import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import {  Radio  } from 'antd';

export type ViewType = 'table' | 'card';

export const ViewSwitch: React.FC<{ onChange: (view: ViewType) => void }> = ({ onChange }) => {
  const [_, setSearchParams] = useSearchParams('table');

  React.useEffect(() => {
    onChange('table');
  }, [])

  return <Radio.Group onChange={(e) => {
      onChange(e.target.value)
      setSearchParams(e.target.value)
    }}>
      <Radio.Button value="table">Таблица</Radio.Button>
      <Radio.Button value="card">Карточка</Radio.Button>
    </Radio.Group>
}


