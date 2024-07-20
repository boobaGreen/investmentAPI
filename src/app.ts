import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import tokenRouter from './routes/tokenRouter';
import investmentRouter from './routes/investmentRouter';
import AppError from './utils/appError';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const app = express();

// Set security HTTP headers
app.use(helmet());

const limiter = rateLimit({
  max: 500, // Max requests per hour
  windowMs: 60 * 60 * 1000, // 1 Hour
  message: 'Too many request from this IP, please try again in an hour',
});

// Limit requests per hour from the same IP --- 429 Error code
app.use('/api', limiter);

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' })); // Body limit is 10 kb

// Data sanitization against XSS
// app.use(xss()); // *******************************************************

// Prevent parameter pollution (optional, commented out for now)
// app.use(
//   hpp({
//     whitelist: ["createdAt", "name", "email", "surname"],
//   })
// );

app.use(cors());

app.use('/api/token', tokenRouter);
app.use('/api/investment', investmentRouter);

// set route for all no match routes
app.all('*', (req, res, next) => {
  next(new AppError(`Can't find${req.originalUrl} on this server`, 404));
});

export default app;
