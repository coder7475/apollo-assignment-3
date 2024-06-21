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

// return bike - only admin - id is booking id
router.put('/:id/return', auth('admin'), BookingController.returnBike);

export const BookingRoute = router;
