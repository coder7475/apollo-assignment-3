// ? parent route: /api/v1/users
import express from 'express';
import sendResponse from '../../../../utils/sendResponse';
import httpStatus from 'http-status';

const router = express.Router();

router.post('/create-student', (req, res) => {
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Created Successfully',
    data: null,
  });
});

export const UserRoutes = router;
