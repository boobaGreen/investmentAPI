import dotenv from 'dotenv'; // Importa dotenv prima di altri moduli
import { execSync } from 'child_process';
import supertest from 'supertest';
import app from '../app';
import prisma from '../utils/dbServer';

// Usa l'esportazione predefinita se il file ha una sola esportazione
const request = supertest(app);

console.log('Running setupTest.ts...'); // Può essere mantenuto per il debug

beforeAll(async () => {
  process.env.DATABASE_URL = 'file:./test.db';
  console.log('DATABASE_URL:', process.env.DATABASE_URL);

  try {
    dotenv.config({ path: '.env.test' });

    execSync(
      'npx prisma migrate dev --name init --schema=prisma/schema.prisma --preview-feature',
      { stdio: 'inherit' },
    );

    execSync('node --require esbuild-register prisma/seed.ts', {
      stdio: 'inherit',
    });
  } catch (error) {
    console.error('Error during setup:', error);
    throw error;
  }
});

afterAll(async () => {
  await prisma.$disconnect();
});

export default request; // Usa l'esportazione predefinita
