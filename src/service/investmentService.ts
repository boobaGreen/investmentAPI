import db from '../utils/dbServer';
import { TInvestment } from '../types/TInvestment';
import { groupByGranularity } from '../utils/dateUtils'; // Assicurati che la funzione sia importata correttamente

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
  startDate: string = '2000-01-01',
  endDate: string = new Date().toISOString().split('T')[0], // Imposta endDate come la data odierna
  granularity: string = 'day', // Imposta granularità di default come 'day'
) => {
  // Verifica se la granularità è valida
  const validGranularities = ['day', 'week', 'month', 'year'];
  if (!validGranularities.includes(granularity)) {
    throw new Error('Invalid granularity');
  }

  // Recupera gli investimenti dal database
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

  // Raggruppa i dati secondo la granularità
  const groupedData = groupByGranularity(investments, granularity);

  return {
    totalInvestments,
    totalValue,
    details: groupedData,
  };
};
