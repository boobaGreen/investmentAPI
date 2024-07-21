import * as dotenv from 'dotenv';
import supertest from 'supertest';
import { execSync } from 'child_process';
import app from '../app';
import prisma from '../utils/dbServer'; // Usa il percorso corretto

dotenv.config({ path: '.env.test' });

const request = supertest(app);

export default request;

beforeAll(async () => {
  // Esegui le migrazioni sul database di test
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
});

afterAll(async () => {
  // Disconnetti Prisma e pulisci il database di test se necessario
  await prisma.$disconnect();
});
