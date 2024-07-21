import { Request, Response, NextFunction } from 'express';
import {
  getAllInvestmentsService,
  createInvestmentService,
  getInvestmentStatsService,
} from '../service/investmentService';
import catchAsync from '../utils/catchAsync';

// eslint-disable-next-line import/prefer-default-export
export const getAllInvestments = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, _next: NextFunction) => {
    // Esegui la query
    const doc = await getAllInvestmentsService();

    // Invia la risposta
    res.status(200).json({
      status: 'success',
      doc,
    });
  },
);

export const createInvestment = catchAsync(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async (req: Request, res: Response, _next: NextFunction) => {
    const { value, annualInterestRate } = req.body;

    if (value === undefined || annualInterestRate === undefined) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing value or annualInterestRate in request body',
      });
    }

    const newInvestment = await createInvestmentService({
      value,
      annualInterestRate,
    });

    res.status(201).json({
      status: 'success',
      data: newInvestment,
    });
  },
);

// Funzione per ottenere le statistiche sugli investimenti
export const getInvestmentStats = catchAsync(
  async (req: Request, res: Response) => {
    const { startDate, endDate, granularity } = req.query;

    if (!startDate || !endDate || !granularity) {
      return res.status(400).json({
        status: 'fail',
        message:
          'Missing startDate, endDate, or granularity in query parameters',
      });
    }

    const stats = await getInvestmentStatsService(
      startDate as string,
      endDate as string,
      granularity as string,
    );

    res.status(200).json({
      status: 'success',
      data: stats,
    });
  },
);
