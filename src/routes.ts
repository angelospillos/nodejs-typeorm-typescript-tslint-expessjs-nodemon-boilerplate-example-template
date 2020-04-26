import { UserAction } from './action/user.action';
import { Router } from 'express';

const routes = Router();

/**
 * All application routes.
 */
routes.get('/users', UserAction.getAll);
routes.get('/users/:id', UserAction.getById);
routes.post('/users/:id', UserAction.save);

export default routes;