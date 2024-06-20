// ? parent route: /api/bikes
import { Router } from 'express';
import BikeController from './bike.controller';
import auth from '../../../middlewares/auth';

const router = Router();

// * api/bikes
router.post('/', auth('admin'), BikeController.createBike);

export const BikeRoutes = router;
