import { hash } from 'bcrypt';
import logger from '../src/logger';
import db from '../src/utils/dbServer'; // Assicurati che dbServer.ts legga la variabile d'ambiente DATABASE_URL
import { TInvestment } from '../src/types/TInvestment';
import { TUser } from '../src/types/TUser';
import investments from './seedData/investmentSeedData';

type TableNames = 'user' | 'investment' | 'token';

const tableDeleteFunctions = {
  user: () => db.user.deleteMany({}),
  investment: () => db.investment.deleteMany({}),
  token: () => db.token.deleteMany({}),
};

function getUsers(): Array<TUser> {
  return [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
    { username: 'testuser', password: 'testpass' },
  ];
}

function getInvestments(): Array<TInvestment> {
  return investments;
}

async function clearTable(table: TableNames) {
  try {
    // Check if the table has any records
    let count: number;
    switch (table) {
      case 'user':
        count = await db.user.count();
        break;
      case 'investment':
        count = await db.investment.count();
        break;
      case 'token':
        count = await db.token.count();
        break;
      default:
        throw new Error(`Unknown table: ${table}`);
    }

    if (count > 0) {
      await tableDeleteFunctions[table]();
      logger.info(`Cleared ${table} table successfully.`);
    } else {
      logger.info(`${table} table is already empty.`);
    }
  } catch (e) {
    if (e instanceof Error) {
      if (e.message.includes('does not exist')) {
        logger.warn(`${table} table does not exist. Skipping.`);
      } else {
        logger.error(`Error clearing ${table} table:`, e);
        throw e;
      }
    } else {
      logger.error('An unexpected error occurred:', e);
      throw e;
    }
  }
}

async function resetAutoIncrement() {
  try {
    // Reset auto-increment for all relevant tables
    await db.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Investment'`;
    await db.$executeRaw`DELETE FROM sqlite_sequence WHERE name='User'`;
    await db.$executeRaw`DELETE FROM sqlite_sequence WHERE name='Token'`;
    logger.info('Reset auto-increment for all tables.');
  } catch (e) {
    logger.error('Error resetting auto-increment:', e);
    throw e;
  }
}

async function seed() {
  try {
    // Clear and reset the database
    await Promise.all([
      clearTable('user'),
      clearTable('investment'),
      clearTable('token'),
    ]);

    await resetAutoIncrement(); // Reset auto-increment

    // Seed users
    await Promise.all(
      getUsers().map(async (user) => {
        return db.user.create({
          data: {
            username: user.username,
            password: await hash(user.password, 10),
          },
        });
      }),
    );

    // Seed investments
    await db.$transaction(
      getInvestments().map((investment) => {
        return db.investment.create({
          data: {
            value: investment.value,
            annualInterestRate: investment.annualInterestRate,
            createdAt: investment.createdAt,
          },
        });
      }),
    );

    logger.info('Database seeding completed successfully');
  } catch (e) {
    logger.error('Error during seeding:', e);
    process.exit(1);
  } finally {
    await db.$disconnect();
  }
}

seed();
