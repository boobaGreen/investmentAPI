import * as dotenv from 'dotenv';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../utils/dbServer';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the .env file');
}

/**
 * Verifies if the provided username and password are correct
 *
 * This function checks if the user exists in the database and if the provided
 * password matches the stored hashed password using bcrypt.
 *
 * @param {string} username - The username to be verified.
 * @param {string} password - The password to be verified.
 *
 * @returns {Promise<boolean>} A promise that resolves to true if the username
 * and password are correct, otherwise false.
 */
export async function verifyUserAndPass(
  username: string,
  password: string,
): Promise<boolean> {
  // Retrieve user record from the database
  const user = await db.user.findUnique({
    where: { username },
  });

  // Check if user exists and password is correct
  if (user && (await compare(password, user.password))) {
    return true;
  }
  return false;
}

/**
 * Generates a JWT token for the given username and authentication level
 *
 * This function creates a JWT token signed with the secret key and sets an expiration time.
 *
 * @param {string} username - The username to include in the token payload.
 * @param {string} authLevel - The authorization level to include in the token payload.
 *
 * @returns {string} The generated JWT token.
 */
export function generateToken(username: string, authLevel: string): string {
  return jwt.sign({ username, authLevel }, JWT_SECRET, { expiresIn: '1h' });
}

/**
 * Saves a new token record to the database
 *
 * This function stores a new token with its associated authorization level
 * and marks it as not used.
 *
 * @param {string} token - The token to be saved.
 * @param {string} authLevel - The authorization level associated with the token.
 *
 * @returns {Promise<void>} A promise that resolves when the token is saved.
 */
export async function saveToken(
  token: string,
  authLevel: string,
): Promise<void> {
  await db.token.create({
    data: {
      token,
      authLevel,
      isUsed: false,
    },
  });
}

/**
 * Verifies and decodes a JWT token
 *
 * This function checks if the token is valid, not expired, and exists in the database.
 * It also verifies that the token has not been marked as used.
 *
 * @param {string} token - The JWT token to be verified.
 *
 * @returns {Promise<Object|null>} A promise that resolves to the decoded token payload if valid,
 * or null if invalid or expired.
 */
export async function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as {
      username: string;
      authLevel: string;
    };

    // Check if token exists in the database and is not used
    const tokenRecord = await db.token.findUnique({
      where: { token },
    });

    if (tokenRecord && !tokenRecord.isUsed) {
      // Optionally mark token as used here
      return decoded;
    }

    return null;
  } catch (error) {
    return null;
  }
}

/**
 * Marks a token as used in the database
 *
 * This function updates the token record to indicate that it has been used.
 *
 * @param {string} token - The token to be marked as used.
 *
 * @returns {Promise<void>} A promise that resolves when the token is marked as used.
 */
export async function markTokenAsUsed(token: string): Promise<void> {
  await db.token.updateMany({
    where: {
      token: token,
      isUsed: false,
    },
    data: {
      isUsed: true,
    },
  });
}
