// ? parent route: /api/booking
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('hey');
});

export const BookingRoute = router;
