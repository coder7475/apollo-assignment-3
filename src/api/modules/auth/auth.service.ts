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
    // TODO 1: check if user exists
    // TODO 2: check if user is already deleted
    // TODO 3: check if password is correct
    // TODO 4: create jwt token
    // TODO 5: return the token
    return;
};

const AuthServices = {
    createNewUser,
    loginUser,
};

export default AuthServices;
