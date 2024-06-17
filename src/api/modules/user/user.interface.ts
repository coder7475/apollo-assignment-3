/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

// Interface for user model
interface IUser {
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: 'user' | 'admin';
    isDeleted: boolean;
}

// Interface for mongoose schema model
export interface UserModel extends Model<IUser> {
    //instance methods for checking if the user exist
    doesUserExists(email: string): Promise<IUser>;
}

export default IUser;
