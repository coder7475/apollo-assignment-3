import httpStatus from 'http-status';
import catchAsync from '../../../utils/catchAsync';
import sendResponse from '../../../utils/sendResponse';
// import User from '../user/user.model';

const signUp = catchAsync(async (req, res) => {
    // const result = await User.create(req.body);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'user created successfully',
        // data: result,
        data: req.body,
    });
});

const AuthController = {
    signUp,
};

export default AuthController;
