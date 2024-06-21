import httpStatus from 'http-status';
import AppError from '../../../errors/AppError';
import IUser from '../user/user.interface';
import User from '../user/user.model';
import ILogin from './auth.interface';
import signToken from './auth.utils';
import parameters from './../../../parameters';
/**
 * It asynchronously creates a new user using the provided user data.
 * @param {IUser} userData - The `userData` parameter
 * @returns returning the result of creating a new user using the
 */
const createNewUser = async (userData: IUser) => {
    const result = await User.create(userData);

    return result.toObject();
};

const loginUser = async (loginData: ILogin) => {
    // ? check if user exists
    const user = await User.doesUserExists(loginData.email);
    if (!user) {
        throw new AppError(httpStatus.NOT_FOUND, 'User does not exits!');
    }
    // ?? check if user is already deleted
    const isDeleted = user?.isDeleted;

    if (isDeleted) {
        throw new AppError(httpStatus.FORBIDDEN, 'User is Deleted!');
    }
    // ? check if password is correct
    const correctPassword = await User.isPasswordMatched(
        loginData?.password,
        user?.password,
    );

    if (!correctPassword) {
        throw new AppError(httpStatus.FORBIDDEN, 'Password is invalid!');
    }
    //* create jwt token
    const payload = {
        userId: user?._id,
        email: user?.email,
        role: user?.role,
    };
    const accessToken = signToken(
        payload,
        parameters.secret as string,
        parameters.expires as string,
    );

    const refreshToken = signToken(
        payload,
        parameters.refresh_secret as string,
        parameters.refresh_expires as string,
    );

    return {
        accessToken,
        refreshToken,
        user,
    };
};

const AuthServices = {
    createNewUser,
    loginUser,
};

export default AuthServices;
