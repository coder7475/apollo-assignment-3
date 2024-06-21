import { z } from 'zod';

const zodBookingSchema = z.object({
    userId: z.string(),
    bikeId: z.string(),
    startTime: z.date(),
    returnTime: z.date(),
    totalCost: z.number(),
    isReturned: z.boolean().default(false).optional(),
});

export const zodRentalSchema = z.object({
    bikeId: z.string(),
    startTime: z.string(),
});

export default zodBookingSchema;
