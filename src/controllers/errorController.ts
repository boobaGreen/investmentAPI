import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import AppError from '../utils/appError';

// Development error sending function
const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Production error sending function
const sendErrorProduction = (err: AppError, res: Response) => {
  // Operational error: trusted error - send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    // Programming or other unknown error: don't leak details
    console.error('ERROR :', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!',
    });
  }
};

// Global error handling middleware
const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  (err as AppError).statusCode = (err as AppError).statusCode || 500; // Internal server error 500
  (err as AppError).status = (err as AppError).status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err as AppError, res);
  } else if (process.env.NODE_ENV === 'production') {
    const error = { ...err }; // Create a copy to avoid modifying the original error
    error.name = err.name;
    error.message = err.message;

    sendErrorProduction(error as AppError, res); // Cast the error to AppError for production handling
  }

  next(); // Call next middleware (optional, depending on your error handling strategy)
};

export default errorHandler;
