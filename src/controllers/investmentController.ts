import { Request, Response, NextFunction } from 'express';
import {
  getAllInvestmentsService,
  createInvestmentService,
  getInvestmentStatsService,
  deleteInvestmentService,
  updateInvestmentService,
  getOneInvestmentService,
} from '../service/investmentService';
import catchAsync from '../utils/catchAsync';
import AppError from '../utils/appError';

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
  async (req: Request, res: Response, next: NextFunction) => {
    const { value, annualInterestRate } = req.body;

    // Validate that required fields are present
    if (value === undefined || annualInterestRate === undefined) {
      next(
        new AppError(
          'Missing value or annualInterestRate in request body',
          400,
        ),
      );
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
 * Handler to get a single investment by ID.
 *
 * @param req - Express Request object, containing the investment ID in the URL parameters.
 * @param res - Express Response object.
 * @param next - Express NextFunction object.
 *
 * @returns A JSON response with the status of the request and the investment data.
 * @throws 400 Bad Request if the 'id' is missing from the request parameters.
 * @throws 404 Not Found if the investment is not found.
 */
export const getOneInvestment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    // Validate that the ID is present
    if (!id) {
      return next(new AppError('Missing id in request parameters', 400));
    }

    // Fetch the investment by ID using the service
    const investment = await getOneInvestmentService(id);

    // If the investment is not found, throw a 404 error
    if (!investment) {
      return next(new AppError('Investment not found', 404));
    }

    // Send the response with status code 200 and the investment data
    res.status(200).json({
      status: 'success',
      data: investment,
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
  async (req: Request, res: Response, next: NextFunction) => {
    const { startDate, endDate, granularity } = req.query;

    // Validate that required query parameters are present
    if (!startDate || !endDate || !granularity) {
      next(
        new AppError(
          'Missing startDate, endDate, or granularity in query parameters',
          400,
        ),
      );
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

// Handler per eliminare un investimento
export const deleteInvestment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params; // L'ID viene passato come parametro dell'URL

    if (!id) {
      return next(new AppError('Missing id in request parameters', 400));
    }

    try {
      await deleteInvestmentService(id);
      res.status(204).json({
        status: 'success',
        message: 'Investment deleted successfully',
      });
    } catch (error) {
      return next(new AppError('No valid ID', 400));
    }
  },
);

/**
 * Handler to update an investment.
 *
 * @param req - Express Request object, containing the ID as a parameter and the update data in the request body.
 * @param res - Express Response object.
 * @param next - Express NextFunction object.
 *
 * @returns A JSON response with the status of the request and the updated investment data.
 * @throws 400 Bad Request if the ID or updateable fields are missing.
 */
export const updateInvestment = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { value, annualInterestRate, confirmedAt } = req.body;

    if (!id) {
      return next(new AppError('Missing id in request parameters', 400));
    }

    const updateData: {
      value?: number;
      annualInterestRate?: number;
      confirmedAt?: Date | null;
    } = {};
    if (value !== undefined) updateData.value = value;
    if (annualInterestRate !== undefined)
      updateData.annualInterestRate = annualInterestRate;

    if (confirmedAt !== undefined) {
      const checkedDate = new Date(confirmedAt); // Convert the string to a Date object
      updateData.confirmedAt = checkedDate;
    }

    if (Object.keys(updateData).length === 0) {
      return next(new AppError('No updatable fields provided', 400));
    }

    // Fetch the existing investment to check creation date
    const existingInvestment = await getOneInvestmentService(id);
    if (!existingInvestment) {
      return next(new AppError('Investment not found', 404));
    }

    const createdAt = new Date(existingInvestment.createdAt);
    if (confirmedAt) {
      const confirmedAtDate = new Date(confirmedAt);
      if (confirmedAtDate < createdAt) {
        return next(
          new AppError('confirmedAt must be greater than creation date', 400),
        );
      }
    }

    const updatedInvestment = await updateInvestmentService(id, updateData);

    res.status(200).json({
      status: 'success',
      data: updatedInvestment,
    });
  },
);
