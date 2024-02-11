import * as React from 'react';

import { ViewSwitch, ViewType } from './components';

export function Page() {
  const [view, setView] = React.useState<ViewType>();

  return (
    <>
      <ViewSwitch onChange={setView} />
      {view}
    </>
  )
}
