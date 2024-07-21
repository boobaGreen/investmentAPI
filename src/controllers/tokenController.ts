import { Request, Response } from 'express';
import {
  verifyUserAndPass,
  generateToken,
  saveToken,
} from '../service/tokenService';
import catchAsync from '../utils/catchAsync';

const JWT_HOUR_EXPIRY = parseInt(process.env.JWT_HOUR_EXPIRY || '1', 10); // Imposta a 1 ora di default se non definito
const maxAgeInMilliseconds = JWT_HOUR_EXPIRY * 60 * 60 * 1000; // Converti ore in millisecondi

// eslint-disable-next-line import/prefer-default-export
export const getToken = catchAsync(async (req: Request, res: Response) => {
  const { username, password } = req.body;

  let authLevel: string;
  let token: string;

  if (username && password) {
    const isValidUser = await verifyUserAndPass(username, password);

    if (isValidUser) {
      authLevel = 'readWrite';
      token = generateToken(username, authLevel);
      await saveToken(token, authLevel);

      res.cookie('authToken', token, {
        httpOnly: true, // Cookie non accessibile tramite JavaScript
        secure: process.env.NODE_ENV === 'production', // Imposta a true se sei in produzione
        sameSite: 'strict', // Aumenta la protezione CSRF
        maxAge: maxAgeInMilliseconds, // Durata del cookie (in millisecondi)
      });

      return res.status(200).json({
        status: 'success',
        message: 'Token has been set as a cookie with "readWrite" auth access',
      });
    }
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid username or password',
    });
  }

  if (!username && !password) {
    authLevel = 'read';
    token = generateToken('userGenerico', authLevel);
    await saveToken(token, authLevel);

    res.cookie('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: maxAgeInMilliseconds,
    });

    return res.status(200).json({
      status: 'success',
      message: 'Token has been set as a cookie with "read" auth access',
    });
  }

  return res.status(400).json({
    status: 'fail',
    message: 'Missing username or password',
  });
});
