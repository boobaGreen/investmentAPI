import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for POST /api/investment
describe('POST Create an investment', () => {
  /**
   * Test case: Should create an investment when auth token has "readWrite" access
   *
   * This test verifies that an investment can be successfully created when a valid "readWrite" auth token is provided.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" auth token by sending a POST request to /api/token.
   * 2. Use the token to make a POST request to /api/investment.
   * 3. Verify the response status and body.
   */
  it('should create an investment and return it WHEN auth token "readWrite"', async () => {
    // Request to obtain auth token
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request to create investment using the obtained token
    const { body, status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ value: 2000000, annualInterestRate: 15 });

    // Verify the creation of investment
    expect(status).toBe(201);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('data.value');
  });

  /**
   * Test case: Should NOT create an investment when "annualInterestRate" is missing
   *
   * This test ensures that an investment cannot be created if the "annualInterestRate" field is missing from the request.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" auth token.
   * 2. Attempt to create an investment with missing "annualInterestRate".
   * 3. Verify that the response status is not 201 (creation successful).
   */
  it('should NOT create an investment WHEN auth token "readWrite" is OK but MISSING "annualInterestRate" field', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user5', password: 'password5' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ value: 4000000 });

    expect(status).not.toBe(201);
  });

  /**
   * Test case: Should NOT create an investment when "value" is missing
   *
   * This test ensures that an investment cannot be created if the "value" field is missing from the request.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" auth token.
   * 2. Attempt to create an investment with missing "value".
   * 3. Verify that the response status is not 201 (creation successful).
   */
  it('should NOT create an investment WHEN auth token "readWrite" is OK but MISSING "value" field', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ annualInterestRate: 15 });

    expect(status).not.toBe(201);
  });

  /**
   * Test case: Should NOT create an investment when auth token is "read" only
   *
   * This test verifies that an investment cannot be created when the provided auth token has only "read" access.
   *
   * Steps:
   * 1. Obtain a "read" auth token by sending a POST request to /api/token without credentials.
   * 2. Attempt to create an investment using the token.
   * 3. Verify that the response status is not 201 (creation successful).
   */
  it('should NOT create an investment WHEN auth token is "read" only', async () => {
    const tokenResponse = await request.post('/api/token').send({});

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const { status } = await request
      .post('/api/investment')
      .set('Cookie', `authToken=${authTokenValue}`)
      .send({ value: 2000000, annualInterestRate: 15 });

    expect(status).not.toBe(201);
  });

  /**
   * Test case: Should NOT create an investment when auth token is missing
   *
   * This test ensures that an investment cannot be created if the auth token is missing or invalid.
   *
   * Steps:
   * 1. Attempt to obtain an auth token with incorrect credentials.
   * 2. Attempt to create an investment without providing a valid auth token.
   * 3. Verify that the response status is not 201 (creation successful).
   */
  it('should NOT create an investment WHEN auth token is missing', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'wrongpass' });

    expect(tokenResponse.status).not.toBe(200);

    const { status } = await request
      .post('/api/investment')
      .send({ value: 2000000, annualInterestRate: 15 });

    expect(status).not.toBe(201);
  });
});
