// ? parent route: /api/rentals
import { Router } from 'express';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import { zodRentalSchema } from './booking.validation';

const router = Router();

// create rental
router.post(
    '/',
    validateRequest(zodRentalSchema),
    auth('user', 'admin'),
    (req, res) => {
        res.json(req.body);
    },
);

export const BookingRoute = router;
