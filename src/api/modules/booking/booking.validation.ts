import { z } from 'zod';

export const zodBookingSchema = z.object({
    userId: z.string(),
    bikeId: z.string(),
    startTime: z.date(),
    returnTime: z.date(),
    totalCost: z.number(),
    isReturned: z.boolean().default(false).optional(),
});

export default zodBookingSchema;
