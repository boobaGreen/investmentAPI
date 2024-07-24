import * as dotenv from 'dotenv';

dotenv.config();

const JWT_HOUR_EXPIRATION_RAW = process.env.JWT_HOUR_EXPIRATION;
const JWT_HOUR_EXPIRATION = parseInt(JWT_HOUR_EXPIRATION_RAW || '1', 10);

const MIN_HOUR_EXPIRATION = 1;
const MAX_HOUR_EXPIRATION = 24;

const isValidNumber = (value: number): boolean => {
  return Number.isInteger(value) && value > 0;
};

const validJWTHourExpiration = isValidNumber(JWT_HOUR_EXPIRATION)
  ? Math.max(
      MIN_HOUR_EXPIRATION,
      Math.min(JWT_HOUR_EXPIRATION, MAX_HOUR_EXPIRATION),
    )
  : MIN_HOUR_EXPIRATION;

const convertHoursToCron = (hours: number): string => {
  if (hours <= 0) return '0 * * * *';

  const intervalInMinutes = hours * 60;

  if (intervalInMinutes >= 1440) {
    return '0 0 * * *';
  }

  return `*/${intervalInMinutes} * * * *`;
};

const CRON_SCHEDULE = convertHoursToCron(validJWTHourExpiration);

export { validJWTHourExpiration, CRON_SCHEDULE };
