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

describe('POST Create an investment', () => {
  it('should create an investment and return it WHEN authtoken "readWrite"', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { body, status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ value: 2000000, annualInterestRate: 15 });

    expect(status).toBe(201);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('data.value');
  });
  it('should NOT create an investment and return it WHEN authtoken "read" only', async () => {
    const tokenResponse = await request.post('/api/token').send({});

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ value: 2000000, annualInterestRate: 15 });

    expect(status).toBe(403);
  });
});
