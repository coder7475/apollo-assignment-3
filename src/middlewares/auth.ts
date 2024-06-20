import catchAsync from '../utils/catchAsync';

const auth = (...roles: string[]) => {
    return catchAsync(async (req, res, next) => {
        console.log(roles);
        next();
    });
};

export default auth;
