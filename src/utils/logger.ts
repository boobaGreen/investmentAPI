import { createLogger, format, transports } from 'winston';

// Destructure the format utilities from winston's format module
const { combine, timestamp, printf, colorize } = format;

// Define a custom log format to include timestamp, log level, and message
// eslint-disable-next-line no-shadow
const customFormat = printf(({ level, message, timestamp }) => {
  return `${timestamp} ${level}: ${message}`;
});

// Create a logger instance with specified configuration
const logger = createLogger({
  // Define the format of log messages
  format: combine(
    // Add a timestamp to each log message
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    // Colorize log levels for better readability in the console
    colorize(),
    // Apply the custom log format
    customFormat,
  ),
  // Define transport options for where logs should be output
  transports: [
    // Output log messages to the console
    new transports.Console(),
    // Output log messages to a file named 'combined.log'
    new transports.File({ filename: 'combined.log' }),
  ],
});

export default logger;
