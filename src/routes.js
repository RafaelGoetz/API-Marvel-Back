import { Router } from 'express';
import CharacterController from './app/controllers/CharacterController';
import ComicsController from './app/controllers/ComicsController'
import LogMiddleware from './app/middlewares/logMiddlewares';

const routes = new Router();

routes.use(LogMiddleware.register);

routes.get('/characters', CharacterController.index)
routes.get('/characters/:id', CharacterController.show)

routes.get('/comic/:id', ComicsController.show)

export default routes;
