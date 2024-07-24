import cron from 'node-cron';
import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import hpp from 'hpp';
import cookieParser from 'cookie-parser';
import tokenRouter from './routes/tokenRouter';
import investmentRouter from './routes/investmentRouter';
import healthRouter from './routes/healthRouter';
import helpRouter from './routes/helpRouter';
import AppError from './utils/appError';
import { CRON_SCHEDULE } from './utils/jwtConfig';
import deleteExpiredTokens from './utils/cleanupService';
import globalErrorHandler from './controllers/errorController';

dotenv.config();

// Ensure the PORT environment variable is set; otherwise, exit the process
if (!process.env.PORT) {
  process.exit(1);
}

const app = express();

// Set security HTTP headers using Helmet
app.use(helmet());

// Rate limiter to prevent abuse by limiting requests per hour from the same IP address
const limiter = rateLimit({
  max: 500, // Maximum number of requests per hour
  windowMs: 60 * 60 * 1000, // Time window in milliseconds (1 hour)
  message: 'Too many requests from this IP, please try again in an hour',
});

// Parse cookies
app.use(cookieParser());

// Apply rate limiting to all API routes
app.use('/api', limiter);

// Body parser middleware to handle JSON data in request bodies
app.use(express.json({ limit: '10kb' })); // Limit body size to 10 kilobytes

// Prevent parameter pollution
app.use(hpp());

app.use(cors());

// Register API routes
app.use('/', healthRouter);
app.use('/api', helpRouter);
app.use('/api/token', tokenRouter);
app.use('/api/investment', investmentRouter);

// Handle all undefined routes by returning a 404 error
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});
//Global Error Handling Middleware - 4 argument express recognize is a error middleware
app.use(globalErrorHandler);
// Solo se NON siamo in ambiente di test
if (process.env.NODE_ENV !== 'test') {
  cron.schedule(CRON_SCHEDULE, deleteExpiredTokens);
}

export default app;
