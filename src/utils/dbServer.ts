import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

config({ path: '.env' });

// Create an instance of PrismaClient to interact with the database
const db = new PrismaClient();

// Export the PrismaClient instance for use in other parts of the application
export default db;
