import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

export function Page() {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div>{searchParams.get('tab')}</div>
}
