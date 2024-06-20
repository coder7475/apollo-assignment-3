// ? parent route: /api/bikes
import { Router } from 'express';
import BikeController from './bike.controller';
import auth from '../../../middlewares/auth';
import validateRequest from '../../../middlewares/validateRequest';
import zodBikeSchema, { zodPartialBikeSchema } from './bike.validation';

const router = Router();

// * api/bikes
// admin can create new bike
router.post(
    '/',
    auth('admin'),
    validateRequest(zodBikeSchema),
    BikeController.createBike,
);

// get all bikes
router.get('/', BikeController.allBikes);

// update a bike
router.put(
    '/:id',
    auth('admin'),
    validateRequest(zodPartialBikeSchema),
    BikeController.updateBike,
);

// delete a bike
router.delete('/:id', auth('admin'), BikeController.deleteBike);

export const BikeRoutes = router;
