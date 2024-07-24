import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

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

    expect(tokenResponse.statusCode).toBe(404);

    const { status } = await request
      .get('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`);
    expect(status).toBe(404);
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

    expect(tokenResponse.statusCode).toBe(404);

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
