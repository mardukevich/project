import * as React from 'react';
import * as ReactDOM from 'react-dom';

function LoginForm() {
  return (
    <form action="/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" />
      <button type="Login"></button>
    </form>
  )
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));
