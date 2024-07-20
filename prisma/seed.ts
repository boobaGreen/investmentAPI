import { db } from '../src/utils/dbServer';
import { TInvestment } from '../src/types/TInvestment';

function getInvestments(): Array<TInvestment> {
  return [
    {
      value: 1150000,
      annualInterestRate: 11.5,
    },
    {
      value: 800000,
      annualInterestRate: 10.05,
    },
    {
      value: 1500000,
      annualInterestRate: 13,
    },
    {
      value: 1200000,
      annualInterestRate: 12.25,
    },
  ];
}

async function seed() {
  await Promise.all(
    getInvestments().map((investment) => {
      return db.investment.create({
        data: {
          value: investment.value,
          annualInterestRate: investment.annualInterestRate,
        },
      });
    }),
  );
}

seed();
