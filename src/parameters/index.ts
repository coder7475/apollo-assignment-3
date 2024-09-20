import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    env: process.env.ENV as string,
    port: process.env.PORT,
    database_url: process.env.MONGODB_URI,
    secret: process.env.SECRET_KEY,
    expires: process.env.EXPIRES_IN,
    refresh_secret: process.env.REFRESH_KEY,
    refresh_expires: process.env.REFRESH_EXPIRES,
};
