import { NextFunction, Request, RequestHandler, Response } from 'express';

// * Higher order function to take route callback function and handle error
// * Replaces try {} catch block - handle promise
const catchAsync = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};

export default catchAsync;
