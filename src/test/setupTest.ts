import * as dotenv from 'dotenv';
import { execSync } from 'child_process';
// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import app from '../app';
import prisma from '../utils/dbServer';
import logger from '../logger';

dotenv.config({ path: '.env.test' });

logger.info('DATABASE_URL:', process.env.DATABASE_URL); // This should output the test database URL

const request = supertest(app);

export default request;

beforeAll(async () => {
  // Esegui le migrazioni sul database di test
  execSync('npx prisma migrate dev', { stdio: 'inherit' });
});

afterAll(async () => {
  await prisma.$disconnect();
});
