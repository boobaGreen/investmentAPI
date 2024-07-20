import { PrismaClient } from '@prisma/client';

let db: PrismaClient;

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var __db: PrismaClient | undefined;
}

if (!global.__db) {
  global.__db = new PrismaClient();
}

// eslint-disable-next-line prefer-const
db = global.__db;

// eslint-disable-next-line import/prefer-default-export
export { db };

// qui usaimo vae e non mi piace vedere se possiamo usare un altro pattern
