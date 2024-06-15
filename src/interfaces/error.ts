// error sources, an array of objects
type TErrorSources = {
  path: string | number;
  message: string;
}[];

// generic type for Error
interface IGenericErrorResponse {
  statusCode: number;
  message: string;
  errorSources: TErrorSources;
}

export { IGenericErrorResponse, TErrorSources };
