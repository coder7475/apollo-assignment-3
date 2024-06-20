// ? parent route: /api/bikes
import { Router } from 'express';
import BikeController from './bike.controller';

const router = Router();

// * api/bikes
router.post('/', BikeController.createBike);

export const BikeRoutes = router;
