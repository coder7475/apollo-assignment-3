import mongoose from 'mongoose';
import httpStatus from 'http-status';
import { TErrorSources, IGenericErrorResponse } from './../interfaces/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError,
): IGenericErrorResponse => {
  const errorSources: TErrorSources = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    },
  );

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Mongoose Validation Error',
    errorSources,
  };
};

export default handleValidationError;
