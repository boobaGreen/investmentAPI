import { PrismaClient } from '@prisma/client';

class Database {
  private static instance: PrismaClient;

  // Costruttore privato per evitare istanziazione diretta
  // eslint-disable-next-line no-useless-constructor, no-empty-function
  private constructor() {}

  public static getInstance(): PrismaClient {
    if (!Database.instance) {
      Database.instance = new PrismaClient();
    }
    return Database.instance;
  }
}

export default Database.getInstance();
