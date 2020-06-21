import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'brenu',
    email: 'brenu@brenu.com',
    password_hash: 'itsnotahash',
  });

  res.json(user);
});

export default routes;
