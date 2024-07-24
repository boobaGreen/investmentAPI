import prisma from '../../utils/dbServer'; // Assicurati che questo sia il tuo client Prisma configurato
import deleteExpiredTokens from '../../utils/cleanupService';
import { validJWTHourExpiration } from '../../utils/jwtConfig';

describe('deleteExpiredTokens', () => {
  beforeAll(async () => {
    // Pulisci la tabella dei token e inserisci token di esempio per i test
    await prisma.token.deleteMany({});
    await prisma.token.createMany({
      data: [
        {
          token: 'expiredToken', // Inserisci un valore fittizio per il campo token
          authLevel: 'read', // Inserisci un valore per il campo authLevel
          isUsed: false, // Inserisci un valore per il campo isUsed
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 2), // Token scaduto
        },
        {
          token: 'validToken', // Inserisci un valore fittizio per il campo token
          authLevel: 'readWrite', // Inserisci un valore per il campo authLevel
          isUsed: false, // Inserisci un valore per il campo isUsed
          createdAt: new Date(Date.now() - 1000 * 60 * 60 * 1), // Token non scaduto
        },
      ],
    });
  });

  afterAll(async () => {
    // Disconnetti Prisma dopo i test per liberare le risorse
    await prisma.$disconnect();
  });

  it('should delete expired tokens', async () => {
    // Esegui la funzione di pulizia
    await deleteExpiredTokens();

    // Ottieni la data e ora correnti
    const now = new Date();

    // Calcola la data di scadenza per i token
    const expirationThreshold = new Date(
      now.getTime() - (validJWTHourExpiration + 1) * 60 * 60 * 1000,
    );

    // Verifica che solo i token scaduti siano stati eliminati
    const expiredTokens = await prisma.token.findMany({
      where: {
        createdAt: { lt: expirationThreshold },
      },
    });

    const remainingTokens = await prisma.token.findMany({
      where: {
        createdAt: { gte: expirationThreshold },
      },
    });

    // Verifica che i token scaduti siano stati eliminati
    expect(expiredTokens.length).toBe(0); // Dovrebbero essere 0 se i token scaduti sono stati eliminati
    expect(remainingTokens.length).toBeGreaterThan(0); // Assicurati che ci siano ancora token non scaduti
  });

  it('should handle errors if deletion fails', async () => {
    // Simula un errore di database
    jest
      .spyOn(prisma.token, 'deleteMany')
      .mockRejectedValue(new Error('Database error'));

    // Verifica che la funzione gestisca l'errore senza eccezioni non gestite
    await expect(deleteExpiredTokens()).resolves.not.toThrow();
  });
});
