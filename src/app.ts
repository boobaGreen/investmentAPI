import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import tokenRouter from './routes/tokenRouter';
import investmentRouter from './routes/investmentRouter';
import healthRouter from './routes/healthRouter';
import AppError from './utils/appError';

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

// Data sanitization against Cross-Site Scripting (XSS) attacks
// Uncomment and configure the xss middleware as needed
// app.use(xss()); // *******************************************************

// Prevent parameter pollution (optional)
// Uncomment and configure the hpp middleware as needed
// app.use(
//   hpp({
//     whitelist: ["createdAt", "name", "email", "surname"],
//   })
// );

// Enable Cross-Origin Resource Sharing (CORS) to allow requests from other origins
app.use(cors());

// Register API routes
app.use('/api/token', tokenRouter);
app.use('/api/investment', investmentRouter);
app.use('/api/health', healthRouter);

// Handle all undefined routes by returning a 404 error
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

export default app;
