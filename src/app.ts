import cors from 'cors';
import express, { Application } from 'express';
import notFound from './middlewares/notFound';
import parameters from './parameters';
import globalErrorHandler from './middlewares/globalErrorHandler';
import router from './api/routes';
import cookieParser from 'cookie-parser';

// initialize express app
const app: Application = express();

// *? middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: ['http://localhost:7475'],
        credentials: parameters.env === 'production',
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
    }),
);

// * application routes
// ? top level route
app.use('/api', router);
//? handle global error for all defined route
app.use(globalErrorHandler);

//? For all others routes - Routes Not Found
app.use(notFound);

export default app;
