import jwt from 'jsonwebtoken';

const signToken = (
    jwtPayload: { email: string; role: string },
    secret: string,
    expiresIn: string,
) => {
    return jwt.sign(jwtPayload, secret, {
        expiresIn,
    });
};

export default signToken;
