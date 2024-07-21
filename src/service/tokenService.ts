import * as dotenv from 'dotenv';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../utils/dbServer';

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
//************************metetr expires da .env */
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
