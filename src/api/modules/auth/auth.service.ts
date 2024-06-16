import IUser from '../user/user.interface';
import User from '../user/user.model';

/**
 * It asynchronously creates a new user using the provided user data.
 * @param {IUser} userData - The `userData` parameter
 * @returns returning the result of creating a new user using the
 */
const createNewUser = async (userData: IUser) => {
    const result = await User.create(userData);
    return result;
};

const AuthServices = {
    createNewUser,
};

export default AuthServices;
