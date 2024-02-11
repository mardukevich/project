import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { useSearchParams } from 'react-router-dom';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return <div>{searchParams.get('tab')}</div>
}
const rootElement = document.getElementById('root');
if (rootElement === null)
  console.error('Add element with id root');

const root = createRoot(rootElement as Element);
root.render(<App />);
