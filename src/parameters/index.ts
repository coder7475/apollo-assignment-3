import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
    env: process.env.ENV,
    port: process.env.PORT,
    database_url: process.env.MONGODB_URI,
    secret: process.env.SECRET_KEY,
    expires: process.env.EXPIRES_IN,
};
