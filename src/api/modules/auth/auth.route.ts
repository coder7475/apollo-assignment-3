// ? parent route: /api/auth
import express from 'express';
import AuthController from './auth.controller';
import validateRequest from '../../../middlewares/validateRequest';
import zodUserSchema from '../user/user.validation';
import zodLoginSchema from './auth.validation';

const router = express.Router();

// sign up a user
router.post('/signup', validateRequest(zodUserSchema), AuthController.signUp);

// login a user after verification
router.post('/login', validateRequest(zodLoginSchema), (req, res) => {
    res.json(req.body);
});

export const AuthRoutes = router;
