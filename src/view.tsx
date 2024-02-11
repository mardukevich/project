import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Page } from './page';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/",
    loader: () => ({ message: "Hello Data Router!" }),
    Component() {
      return <Page />
    },
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}

const rootElement = document.getElementById('root');
if (rootElement === null)
  console.error('Add element with id root');

const root = createRoot(rootElement as Element);
root.render(<App />);
