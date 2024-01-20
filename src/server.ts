import * as express from 'express';
import { Request, Response } from 'express';
 
const app = express();
const PORT = 3000;

interface User {
  id: number;
  name: string;
}

let users: User[] = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

app.use(express.json());

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // Process the form data (e.g., validate, save to a database, etc.)

  // Send a response back to the client
  res.send(`Form submitted: Username - ${username}, Password - ${password}`);
});

app.get('/users', (req: Request, res: Response) => {
  res.json(users);
});

app.post('/users', (req: Request, res: Response) => {
  const newUser: User = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const updatedUser: User = req.body;
  users = users.map((user) => (user.id === parseInt(id) ? { ...user, ...updatedUser } : user));
  res.json(users.find((user) => user.id === parseInt(id)));
});

app.delete('/users/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  users = users.filter((user) => user.id !== parseInt(id));
  res.sendStatus(204);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
