export interface IBike {
    name: string;
    description: string;
    pricePerHour: number;
    cc: number;
    year: number;
    model: string;
    brand: string;
    isAvailable: boolean;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
}

export default IBike;
