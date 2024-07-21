import { TInvestment } from '../types/TInvestment';

// Funzione per raggruppare i dati in base alla granularità
// eslint-disable-next-line import/prefer-default-export
export const groupByGranularity = (
  investments: TInvestment[],
  granularity: string,
) => {
  const grouped: Record<string, { count: number; totalValue: number }> = {};

  investments.forEach((inv) => {
    const date = new Date(inv.createdAt);
    let key: string;

    switch (granularity) {
      case 'day':
        key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        break;
      case 'week': {
        const startOfWeek = new Date(
          date.setDate(date.getDate() - date.getDay()),
        );
        key = `${startOfWeek.getFullYear()}-${startOfWeek.getMonth() + 1}-${Math.ceil(date.getDate() / 7)}`;
        break;
      }
      case 'month':
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        break;
      case 'year':
        key = `${date.getFullYear()}`;
        break;
      default:
        key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    if (!grouped[key]) {
      grouped[key] = { count: 0, totalValue: 0 };
    }

    grouped[key].count += 1;
    grouped[key].totalValue += inv.value;
  });

  return grouped;
};
