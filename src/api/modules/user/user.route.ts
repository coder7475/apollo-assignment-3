// ? parent route: /api/users
import { Router } from 'express';
import UserController from './user.controller';
import validateRequest from '../../../middlewares/validateRequest';
import { zodPartialUserSchema } from './user.validation';

const router = Router();

// * api/users/me
// get users profile
router.get('/me', UserController.getProfile);

// update users profile
router.put(
    '/me',
    validateRequest(zodPartialUserSchema),
    UserController.updateProfile,
);

export const UserRoutes = router;
