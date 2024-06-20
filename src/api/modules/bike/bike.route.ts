// ? parent route: /api/bikes
import { Router } from 'express';

const router = Router();

// * api/bikes
router.get('/', (req, res) => {
    res.json({ message: 'bike route created' });
});

export const BikeRoutes = router;
