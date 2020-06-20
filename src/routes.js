import { Router } from 'express';

import Database from './config/database';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

export default routes;
