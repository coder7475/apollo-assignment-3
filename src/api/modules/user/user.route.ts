// ? parent route: /api/users
import { Router } from 'express';
import UserController from './user.controller';

const router = Router();

// get users profile
router.get('/me', UserController.getProfile);

export const UserRoutes = router;
