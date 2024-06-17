import { z } from 'zod';

const zodLoginSchema = z.object({
    email: z.string({
        required_error: 'Email is required!',
        invalid_type_error: 'Email Type must me string!',
    }),
    password: z.string({
        required_error: 'Password is required!',
        invalid_type_error: 'Password Type must me string!',
    }),
});

export default zodLoginSchema;
