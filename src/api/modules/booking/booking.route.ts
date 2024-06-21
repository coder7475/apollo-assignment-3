// ? parent route: /api/rentals
import { Router } from 'express';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import { zodRentalSchema } from './booking.validation';
import BookingController from './booking.controller';

const router = Router();

// create rental route
router.post(
    '/',
    validateRequest(zodRentalSchema),
    auth('user', 'admin'),
    BookingController.createRental,
);

export const BookingRoute = router;
