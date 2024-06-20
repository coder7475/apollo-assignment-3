// ? parent route: /api/users
import { Router } from 'express';
import UserController from './user.controller';

const router = Router();

// * api/users/me
// get users profile
router.get('/me', UserController.getProfile);

// update users profile
router.put('/me', UserController.updateProfile);

export const UserRoutes = router;
