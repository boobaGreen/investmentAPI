import { Request, Response, NextFunction } from 'express';

// Definizione del tipo per la funzione `fn`
type AsyncHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => Promise<unknown>;

// Funzione di utilità che gestisce le eccezioni
const catchAsync =
  (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction) => {
    // Chiama la funzione `fn` e gestisce gli errori
    fn(req, res, next).catch((err: unknown) => next(err));
  };

export default catchAsync;
