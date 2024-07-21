import db from '../utils/dbServer';
import { TInvestment } from '../types/TInvestment';
import { groupByGranularity } from '../utils/dateUtils'; // Importa la funzione

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

// Funzione per creare un investimento
export const createInvestmentService = async (investmentData: {
  value: number;
  annualInterestRate: number;
}) => {
  return db.investment.create({
    data: investmentData,
  });
};

// Funzione per ottenere le statistiche degli investimenti
export const getInvestmentStatsService = async (
  startDate: string,
  endDate: string,
  granularity: string,
) => {
  const investments = await db.investment.findMany({
    where: {
      createdAt: {
        gte: new Date(startDate),
        lte: new Date(endDate),
      },
    },
  });

  // Processa i dati per ottenere le statistiche richieste
  const totalInvestments = investments.length;
  const totalValue = investments.reduce((sum, inv) => sum + inv.value, 0);

  const groupedData = groupByGranularity(investments, granularity);

  return {
    totalInvestments,
    totalValue,
    details: groupedData,
  };
};
