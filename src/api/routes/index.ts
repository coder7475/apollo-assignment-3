// * Version one router
// parent route: /api
import { Router } from 'express';
import { UserRoutes } from '../modules/booking/user/user.route';
import { AuthRoutes } from '../modules/auth/auth.route';
import { BikeRoutes } from '../modules/bike/bike.route';
import { BookingRoute } from '../modules/booking/booking.route';

const router = Router();

const moduleRoutes = [
    {
        path: '/users',
        route: UserRoutes,
    },
    {
        path: '/auth',
        route: AuthRoutes,
    },
    {
        path: '/bikes',
        route: BikeRoutes,
    },
    {
        path: '/rentals',
        route: BookingRoute,
    },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
