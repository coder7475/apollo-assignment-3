import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
import AuthServices from './auth.service';

const signUp = catchAsync(async (req, res) => {
    const result = await AuthServices.createNewUser(req.body);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully',
        // data: result,
        data: result,
    });
});

const AuthController = {
    signUp,
};

export default AuthController;
