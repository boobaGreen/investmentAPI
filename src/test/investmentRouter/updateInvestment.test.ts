import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for PATCH /api/investment/:id
describe('PATCH update an investment', () => {
  /**
   * Test case: Should update an investment with valid ID and "readWrite" token
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
   * Test cases for different valid formats of confirmedAt
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
   * Test cases for invalid formats of confirmedAt
   */
  //   it('should return a 400 error for invalid confirmedAt format', async () => {
  //     if (!authTokenValue) {
  //       throw new Error('Auth token is not defined');
  //     }

  //     const investmentId = 1; // Assuming this ID exists in your seeded database
  //     const updateData = {
  //       confirmedAt: 'invalid-date', // Invalid format
  //     };

  //     const { status, body } = await request
  //       .patch(`/api/investment/${investmentId}`)
  //       .set('Cookie', `authToken=${authTokenValue}`)
  //       .send(updateData);

  //     expect(status).toBe(400);
  //     expect(body).toHaveProperty('status', 'error');
  //     expect(body).toHaveProperty('message', 'Invalid date format');
  //   });

  //   it('should return a 400 error for missing required fields', async () => {
  //     if (!authTokenValue) {
  //       throw new Error('Auth token is not defined');
  //     }

  //     const investmentId = 1; // Assuming this ID exists in your seeded database
  //     const updateData = {
  //       // Missing required fields
  //     };

  //     const { status } = await request
  //       .patch(`/api/investment/${investmentId}`)
  //       .set('Cookie', `authToken=${authTokenValue}`)
  //       .send(updateData);

  //     expect(status).toBe(400); // Change to 400 if missing fields lead to bad request
  //   });

  //   it('should return a 404 error for a non-existing investment ID', async () => {
  //     if (!authTokenValue) {
  //       throw new Error('Auth token is not defined');
  //     }

  //     const nonExistingInvestmentId = 9999; // Assuming this ID does not exist in your database
  //     const updateData = {
  //       value: 2000,
  //       annualInterestRate: 6.0,
  //       confirmedAt: new Date().toISOString(),
  //     };

  //     const { status } = await request
  //       .patch(`/api/investment/${nonExistingInvestmentId}`)
  //       .set('Cookie', `authToken=${authTokenValue}`)
  //       .send(updateData);

  //     expect(status).toBe(404);
  //   });

  //   it('should return an error with invalid token when updating an investment', async () => {
  //     const invalidToken = 'invalidToken';

  //     const investmentId = 1; // Assuming this ID exists in your seeded database
  //     const updateData = {
  //       value: 3000,
  //       annualInterestRate: 7.0,
  //       confirmedAt: new Date().toISOString(),
  //     };

  //     const { status } = await request
  //       .patch(`/api/investment/${investmentId}`)
  //       .set('Cookie', `authToken=${invalidToken}`)
  //       .send(updateData);

  //     expect(status).toBe(404);
  //   });
});
