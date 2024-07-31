import { execSync } from 'child_process';
import supertest from 'supertest';
import app from '../app';
import prisma from '../utils/dbServer';
import logger from '../utils/logger';

const request = supertest(app); // Creates an instance of Supertest to make HTTP requests

beforeAll(async () => {
  try {
    // Run Prisma migrations for the test database
    execSync(
      'npx prisma migrate dev --name init --schema=prisma/schema.prisma --preview-feature',
      { stdio: 'inherit' }, // Use 'inherit' to output the command's result to the terminal
    );

    // Seed the database with sample data
    execSync('node --require esbuild-register prisma/seed.ts', {
      stdio: 'inherit', // Use 'inherit' to output the command's result to the terminal
    });
  } catch (error) {
    logger.error('Error during setup:', error);
    throw error; // Throw an error to fail the test suite if setup fails
  }
});

afterAll(async () => {
  // Disconnect Prisma after tests to free resources
  await prisma.$disconnect(); // Ensure Prisma disconnects properly
});

export default request; // Export the Supertest instance for use in tests
