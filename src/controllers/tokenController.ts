import { NextFunction, Request, Response } from 'express';
import {
  verifyUserAndPass,
  generateToken,
  saveToken,
} from '../service/tokenService';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

const JWT_HOUR_EXPIRY = parseInt(process.env.JWT_HOUR_EXPIRY || '1', 10); // Default to 1 hour if not set
const maxAgeInMilliseconds = JWT_HOUR_EXPIRY * 60 * 60 * 1000; // Convert hours to milliseconds

/**
 * Handler to generate and set an authentication token.
 *
 * @param req - Express Request object containing the user's credentials in the body.
 * @param res - Express Response object.
 *
 * @returns A JSON response with the status of the request and a message indicating
 *          whether the token was successfully set as a cookie.
 *
 * @throws 400 Bad Request if neither username nor password are provided.
 * @throws 401 Unauthorized if the provided username or password are invalid.
 */
const getToken = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { username, password } = req.body;

    let authLevel: string;
    let token: string;

    // Check if both username and password are provided
    if (username && password) {
      // Verify user credentials
      const isValidUser = await verifyUserAndPass(username, password);

      if (isValidUser) {
        // User is valid, generate a token with 'readWrite' access
        authLevel = 'readWrite';
        token = generateToken(username, authLevel);
        await saveToken(token, authLevel);

        // Set the token as a cookie in the response
        res.cookie('authToken', token, {
          httpOnly: true, // Prevents access to the cookie via JavaScript
          secure: process.env.NODE_ENV === 'production', // Ensures cookie is sent over HTTPS only in production
          sameSite: 'strict', // Provides protection against Cross-Site Request Forgery (CSRF)
          maxAge: maxAgeInMilliseconds, // Sets the cookie expiration time
        });

        // Send success response
        return res.status(200).json({
          status: 'success',
          message:
            'Token has been set as a cookie with "readWrite" auth access',
        });
      }

      // Invalid username or password

      next(new AppError('Invalid username or password', 401));
    }

    // If no username and password are provided, generate a token with 'read' access
    if (!username && !password) {
      authLevel = 'read';
      token = generateToken('genericUser', authLevel);
      await saveToken(token, authLevel);

      // Set the token as a cookie in the response
      res.cookie('authToken', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: maxAgeInMilliseconds,
      });

      // Send success response
      return res.status(200).json({
        status: 'success',
        message: 'Token has been set as a cookie with "read" auth access',
      });
    }

    // Missing username or password in request body

    next(new AppError('Missing username or password', 400));
  },
);

export default getToken;
