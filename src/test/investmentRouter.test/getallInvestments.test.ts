import request from '../setupTest';

/**
 * Parses the "set-cookie" header into an array of individual cookies.
 *
 * This function handles cases where the "set-cookie" header is a string or an array.
 *
 * @param {string | string[]} cookies - The "set-cookie" header value.
 * @returns {string[]} An array of cookies.
 * @throws {Error} Throws an error if the input type is unexpected.
 */
const parseCookies = (cookies: string | string[]): string[] => {
  if (Array.isArray(cookies)) {
    return cookies;
  }
  if (typeof cookies === 'string') {
    return cookies.split(',').map((cookie) => cookie.trim());
  }
  throw new Error('Unexpected type for "set-cookie" header');
};

/**
 * Retrieves the value of a specific cookie by its name.
 *
 * Searches for a cookie by its name and extracts its value from the cookie string.
 *
 * @param {string[]} cookies - An array of cookies in string format.
 * @param {string} cookieName - The name of the cookie to retrieve.
 * @returns {string | undefined} The value of the cookie if found, otherwise undefined.
 */
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

// Test suite for GET /api/investment
describe('GET All Investments', () => {
  /**
   * Test case: Should return all investments with a "readWrite" token.
   *
   * This test verifies that all investments are returned successfully when a valid "readWrite" token is used.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment with the token.
   * 3. Verify the response status and structure.
   */
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

  /**
   * Test case: Should return all investments with a "read" only token.
   *
   * This test verifies that all investments are returned successfully even with a token that has only "read" access.
   *
   * Steps:
   * 1. Obtain a valid token with "read" access.
   * 2. Make a GET request to /api/investment with the token.
   * 3. Verify the response status and structure.
   */
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

  /**
   * Test case: Should return an error with incorrect password when requesting the access token.
   *
   * This test verifies that an incorrect password results in an error when attempting to get an access token and access the investment endpoint.
   *
   * Steps:
   * 1. Request an access token with incorrect credentials.
   * 2. Attempt to access /api/investment with the invalid token.
   * 3. Verify the error responses.
   */
  it('should return an error with incorrect password when requesting the access token and the /api/investment GET', async () => {
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

  /**
   * Test case: Should return an error with incorrect username when requesting the access token.
   *
   * This test verifies that an incorrect username results in an error when attempting to get an access token and access the investment endpoint.
   *
   * Steps:
   * 1. Request an access token with incorrect username.
   * 2. Attempt to access /api/investment with the invalid token.
   * 3. Verify the error responses.
   */
  it('should return an error with incorrect username when requesting the access token and the /api/investment GET', async () => {
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

  /**
   * Test case: Should return an error on second request with the same valid token.
   *
   * This test checks the scenario where a valid token is used to make multiple requests and expects an error on the second request.
   *
   * Steps:
   * 1. Obtain a valid token.
   * 2. Make a GET request to /api/investment with the token and verify success.
   * 3. Make a second request with the same token and verify that an error is returned.
   */
  it('should return an error on second request with the same valid token', async () => {
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

    // Perform a second request with the same token
    const {
      body: body2,
      status: status2,
      error: error2,
    } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);

    // Verify that the second request returns an error
    expect(status2).not.toBe(200);
    expect(body2).toEqual({});
    expect(error2).not.toBe({});
    // Add additional assertions based on the type of error returned by your API
  });
});
