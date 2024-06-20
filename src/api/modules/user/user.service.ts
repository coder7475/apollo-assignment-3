import jwt, { JwtPayload } from 'jsonwebtoken';
import parameters from '../../../parameters';

const getUserProfile = async (token: string) => {
    // checking if the given token is valid
    const decoded = jwt.verify(
        token,
        parameters.secret as string,
    ) as JwtPayload;
    const { email, role, iat, exp } = decoded;

    return {
        token,
    };
};

const UserServices = {
    getUserProfile,
};

export default UserServices;
