import request from './setupTest'; // Assicurati che il percorso sia corretto

const getCookieValue = (
  cookies: string[],
  cookieName: string,
): string | undefined => {
  const cookie = cookies.find((c) => c.startsWith(`${cookieName}=`));
  return cookie ? cookie.split(';')[0].split('=')[1] : undefined;
};

describe('Token Router', () => {
  it('should return a readWrite token when valid credentials are provided', async () => {
    const { body, statusCode, headers } = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'testpass' });

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "readWrite" auth access',
    );

    const cookies = headers['set-cookie'];

    const authTokenValue = Array.isArray(cookies)
      ? getCookieValue(cookies, 'authToken')
      : undefined;

    expect(authTokenValue).toBeDefined();
  });

  it('should return a read ONLY token when no username and password are provided', async () => {
    const { body, statusCode, headers } = await request
      .post('/api/token')
      .send({});

    // Controlla se il codice di stato è 200
    expect(statusCode).toBe(200);

    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "read" auth access',
    );

    const cookies = headers['set-cookie'];

    const authTokenValue = Array.isArray(cookies)
      ? getCookieValue(cookies, 'authToken')
      : undefined;

    expect(authTokenValue).toBeDefined();
  });

  it('should return an error when invalid password is provided', async () => {
    const { body, statusCode } = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'wrongpass' });

    expect(statusCode).toBe(401);
    expect(body).toHaveProperty('status', 'fail');
    expect(body).toHaveProperty('message', 'Invalid username or password');
  });

  it('should return an error when invalid user is provided', async () => {
    const { body, statusCode } = await request
      .post('/api/token')
      .send({ username: 'wronguser', password: 'testpass' });

    expect(statusCode).toBe(401);
    expect(body).toHaveProperty('status', 'fail');
    expect(body).toHaveProperty('message', 'Invalid username or password');
  });

  it('should return an error when missing username or password', async () => {
    const { body, statusCode } = await request
      .post('/api/token')
      .send({ username: 'testuser' });

    expect(statusCode).toBe(400);
    expect(body).toHaveProperty('status', 'fail');
    expect(body).toHaveProperty('message', 'Missing username or password');
  });
});
