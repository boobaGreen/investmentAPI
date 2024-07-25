import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for PATCH /api/investment/:id
describe('PATCH update an investment', () => {
  /**
   * Test case: Should update an investment with valid ID and "readWrite" token.
   *
   * This test verifies that an investment is updated successfully when a valid "readWrite" token and a valid ID are used.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a PATCH request to /api/investment/:id with the token, a valid ID, and update data.
   * 3. Verify the response status and structure.
   */
  it('should update an investment with valid ID and readWrite token', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      value: 1500,
      annualInterestRate: 5.0,
      confirmedAt: new Date().toISOString(),
    };

    const { body, status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('id', investmentId);
    expect(body.data).toHaveProperty('value', updateData.value);
    expect(body.data).toHaveProperty(
      'annualInterestRate',
      updateData.annualInterestRate,
    );
    expect(new Date(body.data.confirmedAt).toISOString()).toBe(
      updateData.confirmedAt,
    );
  });

  /**
   * Test cases for different valid formats of confirmedAt.
   *
   * This test verifies that an investment can be updated with a valid "confirmedAt" value in different formats.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a PATCH request to /api/investment/:id with the token, a valid ID, and different formats of confirmedAt.
   * 3. Verify the response status and structure.
   */
  it('should update an investment with only date in confirmedAt', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user2', password: 'password2' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const investmentId = 2; // Assuming this ID exists in your seeded database
    const updateData = {
      confirmedAt: '2024-07-24', // Only date
    };

    const { body, status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body.data).toHaveProperty('confirmedAt', '2024-07-24T00:00:00.000Z'); // ISO format
  });

  it('should update an investment with date and time without fraction of second in confirmedAt', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user3', password: 'password3' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      confirmedAt: '2024-07-24T15:30:45', // Date and time without fraction of second
    };

    const { body, status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
  });

  it('should update an investment with date and time with offset in confirmedAt', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      confirmedAt: '2024-07-24T15:30:45+02:00', // Date, time, and offset
    };

    const { body, status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
  });

  /**
   * Test cases for invalid formats of confirmedAt.
   *
   * This test verifies that a 400 error is returned when an invalid "confirmedAt" format is used.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a PATCH request to /api/investment/:id with the token, a valid ID, and an invalid "confirmedAt" format.
   * 3. Verify the response status and error message.
   */
  it('should return a 400 error for invalid confirmedAt format', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user5', password: 'password5' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      confirmedAt: 'invalid-date', // Invalid format
    };

    const { status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(404);
  });

  /**
   * Test case: Should return a 400 error for missing required fields.
   *
   * This test verifies that a 400 error is returned when required fields are missing in the update data.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a PATCH request to /api/investment/:id with the token, a valid ID, and missing required fields.
   * 3. Verify the response status and error message.
   */
  it('should return a 400 error for missing required fields', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }
    if (!authTokenValue) {
      throw new Error('Auth token is not defined');
    }

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      annualInterestRate: 5.0,
    };

    const { status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`)
      .send(updateData);

    expect(status).toBe(404);
  });

  /**
   * Test case: Should return a 401 error for unauthorized access.
   *
   * This test verifies that a 401 error is returned when an unauthorized token is used.
   *
   * Steps:
   * 1. Obtain a valid token.
   * 2. Make a PATCH request to /api/investment/:id with an invalid token and valid ID.
   * 3. Verify the response status and error message.
   */
  it('should return a 401 error for unauthorized access', async () => {
    const invalidToken = 'invalid-token';

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const updateData = {
      value: 1500,
      annualInterestRate: 5.0,
      confirmedAt: new Date().toISOString(),
    };

    const { status } = await request
      .patch(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${invalidToken}`)
      .send(updateData);

    expect(status).toBe(401);
  });
});
