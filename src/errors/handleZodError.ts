import httpStatus from 'http-status';
import { ZodError, ZodIssue } from 'zod';
import { IGenericErrorResponse, TErrorSources } from '../interfaces/error';

const handleZodError = (err: ZodError): IGenericErrorResponse => {
  const errorSources: TErrorSources = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  return {
    statusCode: httpStatus.BAD_REQUEST,
    message: 'Zod Validation Error',
    errorSources,
  };
};

export default handleZodError;
