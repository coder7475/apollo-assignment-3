import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { TErrorSources, IGenericErrorResponse } from './../interfaces/error';

const handleCastError = (
  err: mongoose.Error.CastError,
): IGenericErrorResponse => {
  const errorSources: TErrorSources = [
    {
      path: err.path,
      message: err.message,
    },
  ];

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Cast Error',
    errorSources,
  };
};

export default handleCastError;
