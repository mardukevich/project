import * as React from 'react';
import * as ReactDOM from 'react-dom';

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

ReactDOM.render(<LoginForm />, document.getElementById('root'));
