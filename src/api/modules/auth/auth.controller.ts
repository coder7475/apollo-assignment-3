/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AuthServices from './auth.service';
import parameters from '../../../parameters';

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
    const { accessToken, refreshToken, user } = await AuthServices.loginUser(
        req.body,
    );
    const { isDeleted, password, ...data } = user;

    res.cookie('accessToken', accessToken, {
        secure: parameters.env === 'production',
        httpOnly: true,
    });

    res.cookie('refreshToken', refreshToken, {
        secure: parameters.env === 'production',
        httpOnly: true,
    });

    res.status(200).json({
        success: true,
        statusCode: httpStatus.OK,
        message: 'User logged in successfully',
        token: accessToken,
        data: {
            ...data,
        },
    });
});

const AuthController = {
    signUp,
    login,
};

export default AuthController;
