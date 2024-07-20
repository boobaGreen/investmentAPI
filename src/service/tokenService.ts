import * as dotenv from 'dotenv';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { db } from '../utils/dbServer';

dotenv.config();

// Secret key for JWT
const JWT_SECRET = process.env.JWT_SECRET as string;

// Optional: Check if JWT_SECRET is defined
if (!JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined in the .env file');
}

export async function verifyUserAndPass(
  username: string,
  password: string,
): Promise<boolean> {
  const user = await db.user.findUnique({
    where: { username },
  });

  if (user && (await compare(password, user.password))) {
    return true;
  }
  return false;
}

export function generateToken(username: string, authLevel: string): string {
  return jwt.sign({ username, authLevel }, JWT_SECRET, { expiresIn: '1h' });
}

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
