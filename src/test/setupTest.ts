import { execSync } from 'child_process';
import supertest from 'supertest';
import app from '../app';
import prisma from '../utils/dbServer';
import logger from '../utils/logger';

const request = supertest(app); // Crea un'istanza di Supertest per effettuare richieste

beforeAll(async () => {
  try {
    // Esegui le migrazioni di Prisma per il database di test
    execSync(
      'npx prisma migrate dev --name init --schema=prisma/schema.prisma --preview-feature',
      { stdio: 'inherit' }, // Usa 'inherit' per mostrare l'output nel terminale
    );

    // Popola il database con dati di esempio
    execSync('node --require esbuild-register prisma/seed.ts', {
      stdio: 'inherit', // Usa 'inherit' per mostrare l'output nel terminale
    });
  } catch (error) {
    logger.error('Error during setup:', error);
    throw error; // Lancia un errore per far fallire la suite di test se la configurazione fallisce
  }
});

afterAll(async () => {
  // Disconnetti Prisma dopo i test per liberare le risorse
  await prisma.$disconnect(); // Assicurati che Prisma si disconnetta correttamente
});

export default request; // Esporta l'istanza di Supertest per l'uso nei test
