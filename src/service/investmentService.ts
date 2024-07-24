import db from '../utils/dbServer';
// import AppError from '../utils/appError'; // Assicurati che il percorso sia corretto
import { TInvestment } from '../types/TInvestment';
import { groupByGranularity } from '../utils/dateUtils';

/**
 * Service function to retrieve all investments
 *
 * This function queries the database to get a list of all investments with selected fields.
 *
 * @returns {Promise<TInvestment[]>} A promise that resolves to an array of investments.
 */
export const getAllInvestmentsService = async (): Promise<TInvestment[]> => {
  return db.investment.findMany({
    select: {
      id: true,
      value: true,
      annualInterestRate: true,
      createdAt: true,
      confirmedAt: true,
    },
  });
};

/**
 * Service function to create a new investment
 *
 * This function creates a new investment record in the database with the specified details.
 *
 * @param {Object} investmentData - The data for the new investment.
 * @param {number} investmentData.value - The value of the investment.
 * @param {number} investmentData.annualInterestRate - The annual interest rate of the investment.
 *
 * @returns {Promise<TInvestment>} A promise that resolves to the created investment record.
 */
export const createInvestmentService = async (investmentData: {
  value: number;
  annualInterestRate: number;
}): Promise<TInvestment> => {
  return db.investment.create({
    data: investmentData,
  });
};

/**
 * Service function to get investment statistics
 *
 * This function retrieves investment statistics for a given date range and granularity.
 * It defaults to a daily granularity, starting from January 1, 2000, to the current date.
 *
 * @param {string} [startDate='2000-01-01'] - The start date for the statistics (inclusive).
 * @param {string} [endDate=new Date().toISOString().split('T')[0]] - The end date for the statistics (inclusive).
 * @param {string} [granularity='day'] - The granularity for grouping the statistics (e.g., 'day', 'week', 'month', 'year').
 *
 * @throws {Error} Throws an error if the provided granularity is not valid.
 *
 * @returns {Promise<Object>} A promise that resolves to an object containing:
 * - {number} totalInvestments - The total number of investments.
 * - {number} totalValue - The total value of investments.
 * - {Object} details - The investment details grouped by the specified granularity.
 */
export const getInvestmentStatsService = async (
  startDate: string = '2000-01-01',
  endDate: string = new Date().toISOString().split('T')[0],
  granularity: string = 'day',
): Promise<{
  totalInvestments: number;
  totalValue: number;
  details: Record<string, unknown>; // Adjust type as needed for grouped data
}> => {
  // Check if the provided granularity is valid
  const validGranularities = ['day', 'week', 'month', 'year'];
  if (!validGranularities.includes(granularity)) {
    throw new Error('Invalid granularity');
  }

  // Retrieve investments from the database
  const investments = await db.investment.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  // Process the data to calculate total investments and total value
  const totalInvestments = investments.length;
  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);

  // Group the data according to the specified granularity
  const groupedData = groupByGranularity(investments, granularity);

  return {
    totalInvestments,
    totalValue,
    details: groupedData,
  };
};

/**
 * Service function to delete an investment by ID
 *
 * This function deletes an investment record from the database based on the provided ID.
 *
 * @param {string} id - The ID of the investment to delete.
 *
 * @returns {Promise<void>} A promise that resolves when the investment has been deleted.
 */
export const deleteInvestmentService = async (id: string): Promise<void> => {
  await db.investment.delete({
    where: { id: Number(id) },
  });
};

/**
 * Service function to update an investment by ID
 *
 * This function updates an existing investment record in the database with the specified details.
 *
 * @param {string} id - The ID of the investment to update.
 * @param {Object} updateData - The data to update the investment with.
 * @param {number} [updateData.value] - The new value of the investment.
 * @param {number} [updateData.annualInterestRate] - The new annual interest rate of the investment.
 * @param {Date | null} [updateData.confirmedAt] - The new confirmation date of the investment.
 *
 * @returns {Promise<TInvestment>} A promise that resolves to the updated investment record.
 */
export const updateInvestmentService = async (
  id: string,
  updateData: {
    value?: number;
    annualInterestRate?: number;
    confirmedAt?: Date | null;
  },
): Promise<TInvestment> => {
  return db.investment.update({
    where: { id: Number(id) },
    data: updateData,
  });
};

/**
 * Service function to retrieve a single investment by ID
 *
 * This function fetches an investment record from the database based on the provided ID.
 *
 * @param {string} id - The ID of the investment to retrieve.
 *
 * @returns {Promise<TInvestment | null>} A promise that resolves to the investment record or null if not found.
 */
export const getOneInvestmentService = async (
  id: string,
): Promise<TInvestment | null> => {
  return db.investment.findUnique({
    where: { id: Number(id) },
  });
};
