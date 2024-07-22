import { TInvestment } from '../types/TInvestment';

// Function to group investment data based on the specified granularity
// eslint-disable-next-line import/prefer-default-export
export const groupByGranularity = (
  investments: TInvestment[],
  granularity: string,
) => {
  // Object to store the grouped data
  const grouped: Record<string, { count: number; totalValue: number }> = {};

  investments.forEach((inv) => {
    const date = new Date(inv.createdAt);
    let key: string;

    // Determine the key based on the specified granularity
    switch (granularity) {
      case 'day':
        // Group by day (YYYY-MM-DD)
        key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        break;
      case 'week': {
        // Group by week (YYYY-MM-WW)
        // Calculate the start of the week and use it as the key
        const startOfWeek = new Date(
          date.setDate(date.getDate() - date.getDay()),
        );
        key = `${startOfWeek.getFullYear()}-${startOfWeek.getMonth() + 1}-${Math.ceil(date.getDate() / 7)}`;
        break;
      }
      case 'month':
        // Group by month (YYYY-MM)
        key = `${date.getFullYear()}-${date.getMonth() + 1}`;
        break;
      case 'year':
        // Group by year (YYYY)
        key = `${date.getFullYear()}`;
        break;
      default:
        // Default to grouping by day if the granularity is not recognized
        key = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    }

    // Initialize the group if it does not exist
    if (!grouped[key]) {
      grouped[key] = { count: 0, totalValue: 0 };
    }

    // Accumulate the count and total value for the group
    grouped[key].count += 1;
    grouped[key].totalValue += inv.value;
  });

  return grouped;
};
