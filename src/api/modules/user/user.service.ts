import jwt, { JwtPayload } from 'jsonwebtoken';
import parameters from '../../../parameters';
import User from './user.model';
import IUser from './user.interface';

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

const updateUserProfile = async (token: string, newData: Partial<IUser>) => {
    // checking if the given token is valid
    const decoded = jwt.verify(
        token,
        parameters.secret as string,
    ) as JwtPayload;
    const { email, role } = decoded;

    const result = await User.findOneAndUpdate({ email, role }, newData, {
        new: true,
    })
        .lean()
        .exec();

    return result;
};

const UserServices = {
    getUserProfile,
    updateUserProfile,
};

export default UserServices;
