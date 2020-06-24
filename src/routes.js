import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import UserValidator from './app/validators/UserValidator';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserValidator.store, UserController.store);

routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserValidator.update, UserController.update);

export default routes;
