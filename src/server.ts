import dotenv from 'dotenv';
import app from './app';
import logger from './logger';

// Handle uncaught exceptions globally
process.on('uncaughtException', (err) => {
  logger.warn('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  logger.error(err.name, err.message, err.stack);

  process.exit(1);
});

dotenv.config({ path: './config.env' });

const PORT: number = parseInt(process.env.PORT as string, 10) || 8000;

const server = app.listen(PORT, () => {
  logger.info(`App running on port ${PORT}...`);
});

// Handle unhandled promise rejections globally
process.on('unhandledRejection', (err: Error) => {
  logger.warn('UNHANDLED REJECTION! 💥 Shutting down...');
  logger.error(err.name, err.message);
  // Close the server and exit the process with failure code
  server.close(() => {
    process.exit(1);
  });
});
