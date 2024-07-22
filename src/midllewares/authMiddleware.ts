import { Request, Response, NextFunction } from 'express';
import { verifyToken, markTokenAsUsed } from '../service/tokenService';
import AppError from '../utils/appError';

/**
 * Middleware for 'readWrite' authentication.
 *
 * This middleware verifies that the provided token is valid and has 'readWrite' access level.
 * If the token is not valid or does not meet the required access level, an error is thrown.
 *
 * @param req - Express Request object containing the incoming request data, including cookies.
 * @param res - Express Response object used to send responses to the client.
 * @param next - Express NextFunction to pass control to the next middleware.
 *
 * @returns A call to `next()` if the token is valid and has the correct access level, or an error is passed to the next middleware.
 */
export const authWrite = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.authToken;

  if (!token) {
    // No token provided in the request cookies
    return next(new AppError('No token provided', 401));
  }

  try {
    // Verify and decode the token
    const tokenData = await verifyToken(token);

    if (!tokenData) {
      // Token is invalid or expired
      return next(new AppError('Invalid or expired token', 401));
    }

    // Check if the token has 'readWrite' access level
    if (tokenData.authLevel !== 'readWrite') {
      // Token does not have the required access level
      return next(new AppError('Unauthorized access', 403));
    }

    // Mark the token as used  beacuse it is a single-use token
    await markTokenAsUsed(token);

    // Proceed to the next middleware
    next();
  } catch (error) {
    // Error in token verification
    return next(new AppError('Invalid or expired token', 401));
  }
};

/**
 * Middleware for 'read' authentication.
 *
 * This middleware verifies that the provided token is valid and has at least 'read' access level.
 * If the token is not valid or does not meet the required access level, an error is thrown.
 *
 * @param req - Express Request object containing the incoming request data, including cookies.
 * @param res - Express Response object used to send responses to the client.
 * @param next - Express NextFunction to pass control to the next middleware.
 *
 * @returns A call to `next()` if the token is valid and has the correct access level, or an error is passed to the next middleware.
 */
export const authRead = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.authToken;

  if (!token) {
    // No token provided in the request cookies
    return next(new AppError('No token provided', 401));
  }

  try {
    // Verify and decode the token
    const tokenData = await verifyToken(token);

    if (!tokenData) {
      // Token is invalid or expired
      return next(new AppError('Invalid or expired token', 401));
    }

    // Check if the token has 'read' or 'readWrite' access level
    if (tokenData.authLevel !== 'read' && tokenData.authLevel !== 'readWrite') {
      // Token does not have the required access level
      return next(new AppError('Unauthorized access', 403));
    }

    // Mark the token as used (optional, depending on your logic)
    await markTokenAsUsed(token);

    // Proceed to the next middleware
    next();
  } catch (error) {
    // Error in token verification
    return next(new AppError('Invalid or expired token', 401));
  }
};
