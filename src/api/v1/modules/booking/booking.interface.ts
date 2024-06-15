export interface IBooking {
    userId: string;
    bikeId: string;
    startTime: Date;
    returnTime: Date;
    totalCost: number;
    isReturned: boolean;
}

export default IBooking;
