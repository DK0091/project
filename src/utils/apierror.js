// utils/ApiError.js
class ApiError extends Error {
  constructor(statusCode, message,errors = []) {
    super(message);
    this.statusCode = statusCode;   // HTTP status (404, 500, etc.)
    this.data = null;               // no data in errors
    this.success = false;           // always false
    this.errors = errors;           // extra details if needed

    // if (stack) {
    //   this.stack = stack;
    // } else {
    //   Error.captureStackTrace(this, this.constructor);
    // }
  }
}

export default ApiError;
