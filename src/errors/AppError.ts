// * A class to throw error with status code and stack trace
class AppError extends Error {
  constructor(
    public status = 500,
    public message = '',
    public stack = '',
  ) {
    // parent constructor
    super(message);
    // set values of status and stack
    this.status = status;
    // set stack traces
    if (stack) this.stack = stack;
    else Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
