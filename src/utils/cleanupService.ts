import db from './dbServer';
import { validJWTHourExpiration } from './jwtConfig';
import logger from './logger';

const deleteExpiredTokens = async (): Promise<void> => {
  try {
    const now = new Date();
    const expirationThreshold = new Date(
      now.getTime() - (validJWTHourExpiration + 1) * 60 * 60 * 1000,
    );

    // Esegui l'eliminazione dei token scaduti
    await db.token.deleteMany({
      where: {
        createdAt: { lt: expirationThreshold },
      },
    });
  } catch (error) {
    logger.info('unexpected error');
  }
};

export default deleteExpiredTokens;
