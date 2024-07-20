import { Request, Response, NextFunction } from 'express';
import { getAllInvestments } from '../service/investmentService';
import catchAsync from '../utils/catchAsync';

// eslint-disable-next-line import/prefer-default-export
export const getAll = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, _next: NextFunction) => {
    // Esegui la query
    const doc = await getAllInvestments();

    // Invia la risposta
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: { data: doc },
    });
  },
);
