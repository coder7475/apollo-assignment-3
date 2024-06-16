// ? parent route: /api/users
import express from 'express';
import sendResponse from '../../../utils/sendResponse';
import httpStatus from 'http-status';

const router = express.Router();

router.get('/create-student', (req, res) => {
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: 'Created Successfully',
        data: null,
    });
});

export const UserRoutes = router;
