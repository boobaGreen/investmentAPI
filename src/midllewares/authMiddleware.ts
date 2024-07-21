import { Request, Response, NextFunction } from 'express';
import { verifyToken, markTokenAsUsed } from '../service/tokenService'; // Assumiamo che queste funzioni esistano
import AppError from '../utils/appError';

// Middleware per autenticazione di tipo readWrite
// eslint-disable-next-line import/prefer-default-export
export const authWrite = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.authToken;

  if (!token) {
    return next(new AppError('No token provided', 401));
  }

  try {
    const tokenData = await verifyToken(token); // Funzione per verificare e decodificare il token
    if (!tokenData) {
      return next(new AppError('Invalid or expired token', 401));
    }

    if (tokenData.authLevel !== 'readWrite') {
      return next(new AppError('Unauthorized access', 403));
    }

    // Mark token as used
    await markTokenAsUsed(token);

    next();
  } catch (error) {
    return next(new AppError('Invalid or expired token', 401));
  }
};

// Middleware per autenticazione di tipo read
// eslint-disable-next-line import/prefer-default-export
export const authRead = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const token = req.cookies.authToken;

  if (!token) {
    return next(new AppError('No token provided', 401));
  }

  try {
    const tokenData = await verifyToken(token); // Funzione per verificare e decodificare il token
    if (!tokenData) {
      return next(new AppError('Invalid or expired token', 401));
    }

    if (tokenData.authLevel !== 'read' && tokenData.authLevel !== 'readWrite') {
      return next(new AppError('Unauthorized access', 403));
    }

    // Mark token as used (optional, depending on your logic)
    // await markTokenAsUsed(token);

    // Mark token as used
    await markTokenAsUsed(token);

    next();
  } catch (error) {
    return next(new AppError('Invalid or expired token', 401));
  }
};
