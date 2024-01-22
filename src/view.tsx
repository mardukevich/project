import * as React from 'react';
import { createRoot } from 'react-dom/client';

function LoginForm() {
  return (
    <form action="/login" method="POST">
      <label>Username:</label>
      <input type="text" id="username" name="username" />
      <label>Password:</label>
      <input type="password" id="password" name="password" />
      <button type="submit"></button>
    </form>
  )
}
const rootElement = document.getElementById('root');
if (rootElement === null)
  console.error('Add element with id root');

const root = createRoot(rootElement as Element);
root.render(<LoginForm />);
