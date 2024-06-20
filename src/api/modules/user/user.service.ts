import jwt, { JwtPayload } from 'jsonwebtoken';
import parameters from '../../../parameters';
import User from './user.model';

const getUserProfile = async (token: string) => {
    // checking if the given token is valid
    const decoded = jwt.verify(
        token,
        parameters.secret as string,
    ) as JwtPayload;
    const { email, role } = decoded;

    const user = await User.findOne({
        email,
        role,
    })
        .lean()
        .exec();

    return user;
};

const UserServices = {
    getUserProfile,
};

export default UserServices;
