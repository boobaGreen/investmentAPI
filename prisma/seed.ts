import { hash } from 'bcrypt';
import logger from '../src/logger';
import { db } from '../src/utils/dbServer';
import { TInvestment } from '../src/types/TInvestment';
import { TUser } from '../src/types/TUser';

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

function getUsers(): Array<TUser> {
  return [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
  ];
}

async function seed() {
  // Seeding investments
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

  // Seeding users
  await Promise.all(
    getUsers().map(async (user) => {
      return db.user.create({
        data: {
          username: user.username,
          password: await hash(user.password, 10), // Hashing the password before storing it
        },
      });
    }),
  );
}

seed()
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
