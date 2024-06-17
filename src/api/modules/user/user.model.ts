import bcrypt from 'bcrypt';
import { Schema, model } from 'mongoose';
import IUser, { UserModel } from './user.interface';

const userSchema = new Schema<IUser, UserModel>(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            unique: true,
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

// ? Use pre and post middleware to hash password
// ? before saving and clear the password from mongoose document
userSchema.pre('save', async function (next) {
    // hashing password and save into database
    this.password = await bcrypt.hash(this.password, 2);
    next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
});

// ? Statics for User model
userSchema.statics.doesUserExists = async function (email: string) {
    const user = await User.findOne(
        { email },
        // projection
        {
            _id: 0,
            email: 1,
            password: 1,
        },
    );
    return user;
};

const User = model<IUser, UserModel>('User', userSchema);

export default User;
