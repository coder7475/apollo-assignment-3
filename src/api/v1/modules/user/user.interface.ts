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

export default IUser;
