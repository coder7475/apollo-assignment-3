import httpStatus from 'http-status';
import AppError from '../../../errors/AppError';
import IUser from '../user/user.interface';
import User from '../user/user.model';
import ILogin from './auth.interface';

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
    // TODO 3: check if password is correct
    // TODO 4: create jwt token
    // TODO 5: return the token
    return user;
};

const AuthServices = {
    createNewUser,
    loginUser,
};

export default AuthServices;
