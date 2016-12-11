import {
  registerHandler,
  loginHandler,
  logoutHandler
} from './user.controller'
import passport from 'passport';
import { Router } from 'express';
import isAuthenticated from '../../middleware/IsAuthenticatedMiddleware'
import {
  getAllUsersHandler,
  deleteUserByIdHandler,
  createUserHandler,
  updateUserByIdHandler,
  authenticateHandler
} from './user.controller';

const router = new Router();

router.post('/register', registerHandler);

router.post('/login', passport.authenticate('local'), loginHandler);

router.get('/authenticate', isAuthenticated, authenticateHandler);

router.get('/logout', logoutHandler);

router.get('', getAllUsersHandler);

router.post('', createUserHandler);

router.delete('/:userId', deleteUserByIdHandler);

router.put('/:userId', updateUserByIdHandler);

router.post('/add');
export default router;
