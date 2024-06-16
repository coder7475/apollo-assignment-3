import { Schema, model } from 'mongoose';
import IUser from './user.interface';

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
        },
        password: {
            type: String,
        },
        phone: {
            type: String,
        },
        address: {
            type: String,
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    },
);

const User = model<IUser>('User', userSchema);

export default User;
