import db from '../utils/dbServer';
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
}) => {
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
  startDate: string,
  endDate: string,
  granularity: string,
) => {
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
