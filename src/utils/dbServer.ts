import { PrismaClient } from '@prisma/client';
import { config } from 'dotenv';

// Carica le variabili d'ambiente dal file .env
config({ path: '.env' }); // Usa il percorso corretto se necessario

const db = new PrismaClient();

export default db;
