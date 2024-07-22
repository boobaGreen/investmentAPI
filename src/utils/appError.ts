/**
 * Custom error class to handle application-specific errors.
 * Extends the built-in Error class to include additional properties and methods.
 */
class AppError extends Error {
  // HTTP status code associated with the error
  public statusCode: number;

  // Indicates whether the error is operational or a programming error
  public status: string;

  // Flag to determine if the error is operational
  public isOperational: boolean;

  /**
   * Constructs a new AppError instance.
   * @param message - The error message to be displayed.
   * @param statusCode - The HTTP status code associated with the error.
   */
  constructor(message: string, statusCode: number) {
    super(message); // Calls the constructor of the base Error class

    // Set the HTTP status code for the error
    this.statusCode = statusCode;

    // Determine if the error is operational or a server error
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    // Mark this error as operational
    this.isOperational = true;

    // Maintain the stack trace of the error
    Error.captureStackTrace(this, this.constructor);
  }
}

export default AppError;
