import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import UserServices from './user.service';
import AppError from '../../../errors/AppError';

const getProfile = catchAsync(async (req, res) => {
    // console.log(req.headers.cookie?.split(';')[1].split('=')[1]);
    // console.log(req.headers.authorization);
    // const token = req.headers.authorization?.split(' ')[1];
    const cookies = req.cookies;
    if (!cookies.accessToken) {
        throw new AppError(httpStatus.FORBIDDEN, 'You are not authorized');
    }
    const user = UserServices.getUserProfile(cookies);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'User profile retrieved successfully',
        data: cookies,
    });
});

const UserController = {
    getProfile,
};

export default UserController;
