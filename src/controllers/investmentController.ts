import { Request, Response } from 'express';
import {
  getAllInvestmentsService,
  createInvestmentService,
  getInvestmentStatsService,
} from '../service/investmentService';
import catchAsync from '../utils/catchAsync';

/**
 * Handler to get all investments.
 *
 * @param req - Express Request object.
 * @param res - Express Response object.
 *
 * @returns A JSON response with the status of the request and the list of all investments.
 */
export const getAllInvestments = catchAsync(
  async (req: Request, res: Response) => {
    // Execute the service to fetch all investments
    const doc = await getAllInvestmentsService();

    // Send the response with status code 200 and the list of investments
    res.status(200).json({
      status: 'success',
      doc,
    });
  },
);

/**
 * Handler to create a new investment.
 *
 * @param req - Express Request object, containing the investment data in the body.
 * @param res - Express Response object.
 * @param _next - Express NextFunction object (unused).
 *
 * @returns A JSON response with the status of the request and the created investment.
 * @throws 400 Bad Request if 'value' or 'annualInterestRate' are missing from the request body.
 */
export const createInvestment = catchAsync(
  async (req: Request, res: Response) => {
    const { value, annualInterestRate } = req.body;

    // Validate that required fields are present
    if (value === undefined || annualInterestRate === undefined) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing value or annualInterestRate in request body',
      });
    }

    // Create a new investment using the service
    const newInvestment = await createInvestmentService({
      value,
      annualInterestRate,
    });

    // Send the response with status code 201 and the newly created investment
    res.status(201).json({
      status: 'success',
      data: newInvestment,
    });
  },
);

/**
 * Handler to get investment statistics.
 *
 * @param req - Express Request object, containing query parameters 'startDate', 'endDate', and 'granularity'.
 * @param res - Express Response object.
 *
 * @returns A JSON response with the status of the request and the investment statistics.
 * @throws 400 Bad Request if 'startDate', 'endDate', or 'granularity' are missing from the query parameters.
 */
export const getInvestmentStats = catchAsync(
  async (req: Request, res: Response) => {
    const { startDate, endDate, granularity } = req.query;

    // Validate that required query parameters are present
    if (!startDate || !endDate || !granularity) {
      return res.status(400).json({
        status: 'fail',
        message:
          'Missing startDate, endDate, or granularity in query parameters',
      });
    }

    // Fetch investment statistics using the service
    const stats = await getInvestmentStatsService(
      startDate as string,
      endDate as string,
      granularity as string,
    );

    // Send the response with status code 200 and the investment statistics
    res.status(200).json({
      status: 'success',
      data: stats,
    });
  },
);
