import request from '../setupTest';

const parseCookies = (cookies: string | string[]): string[] => {
  if (Array.isArray(cookies)) {
    return cookies;
  }
  if (typeof cookies === 'string') {
    return cookies.split(',').map((cookie) => cookie.trim());
  }
  throw new Error('Unexpected type for "set-cookie" header');
};

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

describe('GET All Investaments', () => {
  it('should return all investments with a readWrite token', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { body, status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('doc');
    expect(body.doc).toBeInstanceOf(Array);
  });
  it('should return all investments with a read only token', async () => {
    const tokenResponse = await request.post('/api/token').send({});

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { body, status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('doc');
    expect(body.doc).toBeInstanceOf(Array);
  });
  it('wrong password when request the access token and the /api/investment GET', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'username2', password: 'wrongpassword2' });

    const authTokenValue = null;

    expect(tokenResponse.statusCode).toBe(401);
    expect(tokenResponse.body).toHaveProperty('status', 'fail');
    expect(tokenResponse.body).toHaveProperty(
      'message',
      'Invalid username or password',
    );

    const { status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);
    expect(status).toBe(401);
  });
  it('wrong username when request the access token and the /api/investment GET', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'wrongusername', password: 'password2' });

    const authTokenValue = null;

    expect(tokenResponse.statusCode).toBe(401);
    expect(tokenResponse.body).toHaveProperty('status', 'fail');
    expect(tokenResponse.body).toHaveProperty(
      'message',
      'Invalid username or password',
    );

    const { status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);
    expect(status).not.toBe(200);
  });
  it('double request with same OK token give an error the second time fetch /api/investment', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user3', password: 'password3' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { body, status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('doc');
    expect(body.doc).toBeInstanceOf(Array);

    // Esegui la seconda richiesta con lo stesso token
    const {
      body: body2,
      status: status2,
      error: error2,
    } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);

    // Verifica che la seconda richiesta restituisca un errore
    expect(status2).not.toBe(200);
    expect(body2).toEqual({});
    expect(error2).not.toBe({});
    // Aggiungi altre asserzioni basate sul tipo di errore restituito dalla tua API
  });
});
