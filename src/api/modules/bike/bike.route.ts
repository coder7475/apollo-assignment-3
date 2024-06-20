// ? parent route: /api/bikes
import { Router } from 'express';
import BikeController from './bike.controller';
import auth from '../../../middlewares/auth';

const router = Router();

// * api/bikes
// admin can create new bike
router.post('/', auth('admin'), BikeController.createBike);

// get all bikes
router.get('/', BikeController.allBikes);

// update a bike
router.put('/:id', auth('admin'), BikeController.updateBike);

export const BikeRoutes = router;
