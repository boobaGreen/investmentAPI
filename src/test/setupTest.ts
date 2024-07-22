import dotenv from 'dotenv';
import { execSync } from 'child_process';
import supertest from 'supertest';
import app from '../app';
import prisma from '../utils/dbServer';
import logger from '../logger';

dotenv.config({ path: '.env.test' });

const request = supertest(app); // Create a Supertest instance for making requests

beforeAll(async () => {
  process.env.DATABASE_URL = 'file:./test.db';

  try {
    // Run Prisma migrationss
    execSync(
      'npx prisma migrate dev --name init --schema=prisma/schema.prisma --preview-feature',
      { stdio: 'inherit' }, // Use 'inherit' to show output in the terminal
    );

    // Seed the database
    execSync('node --require esbuild-register prisma/seed.ts', {
      stdio: 'inherit', // Use 'inherit' to show output in the terminal
    });
  } catch (error) {
    logger.error('Error during setup:', error);
    throw error; // Throw error to fail the test suite if setup fails
  }
});

afterAll(async () => {
  // Disconnect Prisma client after tests to clean up resources
  await prisma.$disconnect();
});

export default request; // Export Supertest request instance for use in tests
