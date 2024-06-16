/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AuthServices from './auth.service';

const signUp = catchAsync(async (req, res) => {
    const { password, isDeleted, ...data } = await AuthServices.createNewUser(
        req.body,
    );

    sendResponse(res, {
        success: true,
        statusCode: httpStatus.CREATED,
        message: 'User registered successfully',
        data: data,
    });
});

const AuthController = {
    signUp,
};

export default AuthController;
