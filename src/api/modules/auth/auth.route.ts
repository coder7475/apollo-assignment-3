// ? parent route: /api/auth
import { Router } from 'express';
import AuthController from './auth.controller';
import validateRequest from '../../../middlewares/validateRequest';
import zodUserSchema from '../booking/user/user.validation';
import zodLoginSchema from './auth.validation';

const router = Router();

// sign up a user
router.post('/signup', validateRequest(zodUserSchema), AuthController.signUp);

// login a user after verification
router.post('/login', validateRequest(zodLoginSchema), AuthController.login);

export const AuthRoutes = router;
