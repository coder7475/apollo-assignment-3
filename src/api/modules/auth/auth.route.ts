// ? parent route: /api/auth
import express from 'express';
import AuthController from './auth.controller';
import validateRequest from '../../../middlewares/validateRequest';
import zodUserSchema from '../user/user.validation';

const router = express.Router();

router.post('/signup', validateRequest(zodUserSchema), AuthController.signUp);

export const AuthRoutes = router;
