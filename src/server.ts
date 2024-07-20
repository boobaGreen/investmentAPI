import dotenv from 'dotenv';
import app from './app';
import logger from './logger';

process.on('uncaughtException', (err) => {
  logger.warn('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  logger.error(err.name, err.message, err.stack);
  process.exit(1);
});

dotenv.config({ path: './config.env' });

const PORT: number = parseInt(process.env.PORT as string, 10);

const server = app.listen(PORT, () => {
  logger.info(`App running on port ${PORT}...`);
});

process.on('unhandledRejection', (err: Error) => {
  logger.warn('UNHANDLER REJECTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
