// ? parent route: /api/users
import express from 'express';
import UserController from './user.controller';

const router = express.Router();

// get users profile
router.get('/me', UserController.getProfile);

export const UserRoutes = router;
