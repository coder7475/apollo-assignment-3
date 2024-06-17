/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AuthServices from './auth.service';

// controller for signup route
const signUp = catchAsync(async (req, res) => {
    // call the auth service
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

// controller for login route
const login = catchAsync(async (req, res) => {
    const result = await AuthServices.loginUser(req.body);
    sendResponse(res, {
        success: true,
        statusCode: httpStatus.OK,
        message: 'User logged in successfully',
        data: result,
    });
});

const AuthController = {
    signUp,
    login,
};

export default AuthController;
