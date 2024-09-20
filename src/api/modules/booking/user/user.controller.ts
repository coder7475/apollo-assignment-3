/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import httpStatus from 'http-status';
import catchAsync from '../../../../utils/catchAsync';
import sendResponse from '../../../../utils/sendResponse';
import UserServices from './user.service';
import AppError from '../../../../errors/AppError';

const getProfile = catchAsync(async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    // const cookies = req.cookies;
    if (!token) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized');
    }
    const user = await UserServices.getUserProfile(token as string);
    // throw error if user does not exits
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User does not exits');
    }
    const { password, isDeleted, ...data } = user;

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User profile retrieved successfully',
        data: data,
    });
});

const updateProfile = catchAsync(async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    // const cookies = req.cookies;
    if (!token) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized');
    }

    const result = await UserServices.updateUserProfile(
        token as string,
        req.body,
    );

    if (!result) {
        throw new AppError(
            httpStatus.FORBIDDEN,
            'Update of user profile failed!',
        );
    }

    const { __v, createdAt, updatedAt, password, isDeleted, ...data } = result;

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Profile updated successfully',
        data: data,
    });
});

const UserController = {
    getProfile,
    updateProfile,
};

export default UserController;
