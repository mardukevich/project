import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Page } from './page';
import { ConfigProvider } from 'antd';

const router = createBrowserRouter([
  {
    path: "/",
    Component() {
      return <Page />
    },
  },
]);

export default function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#E5E7EB'
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  );
}

const rootElement = document.getElementById('root');
if (rootElement === null)
  console.error('Add element with id root');

const root = createRoot(rootElement as Element);
root.render(<App />);
