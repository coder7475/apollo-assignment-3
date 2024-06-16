// ? parent route: /api/auth
import express from 'express';
import httpStatus from 'http-status';
import sendResponse from '../../../utils/sendResponse';

const router = express.Router();

router.get('/signup', (req, res) => {
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'SignUp Successfully',
        data: null,
    });
});

export const AuthRoutes = router;
