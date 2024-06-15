import { z } from 'zod';

const zodBikeSchema = z.object({
    name: z.string(),
    description: z.string(),
    pricePerHour: z.number(),
    cc: z.number(),
    year: z.number(),
    model: z.string(),
    brand: z.string(),
    isAvailable: z.boolean().default(false).optional(),
});

export default zodBikeSchema;
