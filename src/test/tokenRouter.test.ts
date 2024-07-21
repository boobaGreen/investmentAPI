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
      'Token has been set as a cookie',
    );
    // Verifica se il cookie è impostato correttamente
    expect(response.headers['set-cookie']).toBeDefined();
  });

  it('should return an error when invalid password are provided', async () => {
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

  it('should return an error when invalid user are provided', async () => {
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

  it('should return a token  when no username and password are provided', async () => {
    const response = await request.post('/api/token').send({}).expect(200);

    expect(response.body).toHaveProperty('status', 'success');
    expect(response.body).toHaveProperty(
      'message',
      'Token has been set as a cookie',
    );
    // Verifica se il cookie è impostato correttamente
    expect(response.headers['set-cookie']).toBeDefined();
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
