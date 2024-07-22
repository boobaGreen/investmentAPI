import { Request, Response, NextFunction } from 'express';

// Type definition for an asynchronous route handler function
type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

/**
 * Utility function to handle asynchronous route handlers and catch any exceptions.
 * It wraps an asynchronous function and ensures that any errors are passed to the Express error handler.
 * @param fn - The asynchronous route handler function to be wrapped.
 * @returns A new function that wraps the provided handler and catches any errors.
 */
const catchAsync =
  (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    // Call the asynchronous function and handle any exceptions
    fn(req, res, next).catch((err: unknown) => next(err));
  };

export default catchAsync;
