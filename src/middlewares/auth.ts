import jwt, { JwtPayload } from 'jsonwebtoken';
import httpStatus from 'http-status';
import AppError from '../errors/AppError';
import catchAsync from '../utils/catchAsync';
import parameters from '../parameters';
import User from '../api/modules/user/user.model';

const auth = (...roles: string[]) => {
    return catchAsync(async (req, res, next) => {
        const token = req.headers.authorization?.split(' ')[1];

        // checking if the token is missing
        if (!token) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized!',
            );
        }

        // checking if the given token is valid
        const decoded = jwt.verify(
            token,
            parameters.secret as string,
        ) as JwtPayload;
        const { email, role } = decoded;

        // checking if the user is exist
        const user = await User.doesUserExists(email);

        if (!user) {
            throw new AppError(httpStatus.NOT_FOUND, 'User does not exits!');
        }

        // checking if the user is already deleted

        const isDeleted = user?.isDeleted;

        if (isDeleted) {
            throw new AppError(
                httpStatus.FORBIDDEN,
                'User is deleted already!',
            );
        }

        if (roles && !roles.includes(role)) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                'You are not authorized!',
            );
        }

        req.body = {
            ...req.body,
            ...decoded,
        };
        next();
    });
};

export default auth;
