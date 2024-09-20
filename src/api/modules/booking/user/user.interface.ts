/* eslint-disable no-unused-vars */
import { Model } from 'mongoose';

// Interface for user model
interface IUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    address: string;
    role: 'user' | 'admin';
    isDeleted: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

// Interface for mongoose schema model
export interface UserModel extends Model<IUser> {
    // declare static method for checking if user exits
    doesUserExists(email: string): Promise<IUser>;
    // checking if passwords are matched
    isPasswordMatched(
        plainTextPassword: string,
        hashedPassword: string,
    ): Promise<boolean>;
}

export default IUser;
