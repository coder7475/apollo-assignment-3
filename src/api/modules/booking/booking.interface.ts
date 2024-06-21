export interface IBooking {
    userId: string;
    bikeId: string;
    startTime: Date;
    returnTime: Date;
    totalCost: number;
    isReturned: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export interface RentalInfo {
    bikeId: string;
    startTime: Date;
    userId: Date;
    email: string;
    role: string;
    iat: number;
    exp: number;
}
export default IBooking;
