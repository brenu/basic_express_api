import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import UserValidators from './app/validators/UserValidators';
import SessionValidators from './app/validators/SessionValidators';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserValidators.store, UserController.store);

routes.post('/sessions', SessionValidators.store, SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserValidators.update, UserController.update);

export default routes;
