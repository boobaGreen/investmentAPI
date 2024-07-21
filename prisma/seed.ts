import { hash } from 'bcrypt';
import logger from '../src/logger';
import db from '../src/utils/dbServer';
import { TInvestment } from '../src/types/TInvestment';
import { TUser } from '../src/types/TUser';
import investments from './seedData/investmentSeedData'; // Import your investments data

// Funzione per ottenere dati di esempio per gli utenti
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

// Funzione per ottenere i dati degli investimenti
function getInvestments(): Array<TInvestment> {
  // Return the investments data
  return investments;
}

// Funzione principale di seeding
async function seed() {
  // Seeding degli utenti
  await Promise.all(
    getUsers().map(async (user) => {
      return db.user.create({
        data: {
          username: user.username,
          password: await hash(user.password, 10), // Hashing della password
        },
      });
    }),
  );

  // Seeding degli investimenti
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
}

// Esecuzione del seeding e gestione degli errori
seed()
  .catch((e) => {
    logger.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
