// src/test/tokenRouter.test.ts
import { execSync } from 'child_process';
import request from './setupTest'; // Assicurati che il percorso sia corretto
import prisma from '../utils/dbServer'; // Assicurati che il percorso sia corretto

// Resetta il database e applica le migrazioni prima dei test
beforeAll(async () => {
  execSync('npx prisma migrate deploy', { stdio: 'inherit' });
});

// Disconnetti Prisma e pulisci il database dopo i test
afterAll(async () => {
  await prisma.$disconnect();
});

// Funzione per estrarre il valore del cookie da un array di cookies
const getCookieValue = (
  cookies: string[],
  cookieName: string,
): string | undefined => {
  const cookie = cookies.find((c) => c.startsWith(`${cookieName}=`));
  if (cookie) {
    return cookie.split(';')[0].split('=')[1];
  }
  return undefined;
};

// Esegui i test
describe('Token Router', () => {
  it('should return a token when valid credentials are provided', async () => {
    const response = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'testpass' })
      .expect(200);

    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "readWrite" auth access',
    );

    // Gestione del cookie
    const cookies = response.headers['set-cookie'];
    if (Array.isArray(cookies)) {
      // Se 'set-cookie' è un array di stringhe
      const authTokenValue = getCookieValue(cookies, 'authToken');
      expect(authTokenValue).toBeDefined();
    } else if (typeof cookies === 'string') {
      // Se 'set-cookie' è una singola stringa (potrebbe essere necessario dividere su virgole se ci sono più cookie)
      const cookiesArray = cookies.split(',').map((cookie) => cookie.trim());
      const authTokenValue = getCookieValue(cookiesArray, 'authToken');
      expect(authTokenValue).toBeDefined();
    } else {
      // Gestire il caso in cui 'set-cookie' non sia né stringa né array
      throw new Error('Unexpected type for "set-cookie" header');
    }
  });

  it('should return an error when invalid password is provided', async () => {
    const response = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'wrongpass' })
      .expect(401);

    expect(response.body).toHaveProperty('status', 'fail');
    expect(response.body).toHaveProperty(
      'message',
      'Invalid username or password',
    );
  });

  it('should return an error when invalid user is provided', async () => {
    const response = await request
      .post('/api/token')
      .send({ username: 'wronguser', password: 'testpass' })
      .expect(401);

    expect(response.body).toHaveProperty('status', 'fail');
    expect(response.body).toHaveProperty(
      'message',
      'Invalid username or password',
    );
  });

  it('should return a token when no username and password are provided', async () => {
    const response = await request.post('/api/token').send({}).expect(200);

    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "read" auth access',
    );

    // Gestione del cookie
    const cookies = response.headers['set-cookie'];
    if (Array.isArray(cookies)) {
      // Se 'set-cookie' è un array di stringhe
      const authTokenValue = getCookieValue(cookies, 'authToken');
      expect(authTokenValue).toBeDefined();
      // Puoi anche verificare se il valore corrisponde a un valore specifico
      // expect(authTokenValue).toContain('read');
    } else if (typeof cookies === 'string') {
      // Se 'set-cookie' è una singola stringa (potrebbe essere necessario dividere su virgole se ci sono più cookie)
      const cookiesArray = cookies.split(',').map((cookie) => cookie.trim());
      const authTokenValue = getCookieValue(cookiesArray, 'authToken');
      expect(authTokenValue).toBeDefined();
    } else {
      // Gestire il caso in cui 'set-cookie' non sia né stringa né array
      throw new Error('Unexpected type for "set-cookie" header');
    }
  });

  it('should return an error when missing username or password', async () => {
    const response = await request
      .post('/api/token')
      .send({ username: 'testuser' }) // Password mancante
      .expect(400);

    expect(response.body).toHaveProperty('status', 'fail');
    expect(response.body).toHaveProperty(
      'message',
      'Missing username or password',
    );
  });
});
