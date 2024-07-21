import { hash } from 'bcrypt';
import logger from '../src/logger';
import { db } from '../src/utils/dbServer';
import { TInvestment } from '../src/types/TInvestment';
import { TUser } from '../src/types/TUser';

// Funzione per ottenere un numero casuale di investimenti per ogni mese
function generateRandomInvestments(): Omit<
  TInvestment,
  'id' | 'createdAt' | 'confirmedAt'
>[] {
  const numInvestments = Math.floor(Math.random() * (6 - 4 + 1)) + 4; // Genera un numero casuale tra 4 e 6
  const investments: Omit<TInvestment, 'id' | 'createdAt' | 'confirmedAt'>[] =
    [];

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < numInvestments; i++) {
    investments.push({
      value: Math.floor(Math.random() * 1000000) + 500000, // Genera un valore casuale tra 500,000 e 1,500,000
      annualInterestRate: parseFloat((Math.random() * (15 - 5) + 5).toFixed(2)), // Genera un tasso d'interesse casuale tra 5% e 15%
    });
  }

  return investments;
}

// Funzione per ottenere dati di esempio per gli utenti
function getUsers(): Array<TUser> {
  return [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'user3', password: 'password3' },
    { username: 'user4', password: 'password4' },
    { username: 'user5', password: 'password5' },
  ];
}

// Funzione principale di seeding
async function seed() {
  // Data di inizio simulata e intervallo di un mese in millisecondi
  const startDate = new Date('2018-01-01T00:00:00Z'); // 6 anni fa
  const endDate = new Date();

  // Array per memorizzare tutte le date mensili da generare
  const dates = [];
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setMonth(date.getMonth() + 1)
  ) {
    dates.push(new Date(date));
  }

  // Seeding degli investimenti in blocchi
  // eslint-disable-next-line no-restricted-syntax
  for (const date of dates) {
    const investments = generateRandomInvestments();
    // Usare transazioni per migliorare le performance
    // eslint-disable-next-line no-await-in-loop
    await db.$transaction(
      investments.map((investment) => {
        return db.investment.create({
          data: {
            value: investment.value,
            annualInterestRate: investment.annualInterestRate,
            createdAt: new Date(date),
          },
        });
      }),
    );
  }

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
