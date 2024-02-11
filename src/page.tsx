import * as React from 'react';

import { ViewSwitch, ViewType } from './components';
import { Pagination } from 'antd';

export function Page() {
  const [view, setView] = React.useState<ViewType>();

  return (
    <>
      <ViewSwitch onChange={setView} />
      <Pagination />
    </>
  )
}
