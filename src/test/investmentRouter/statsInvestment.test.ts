import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for the Investment Stats API
describe('Investment Stats API', () => {
  /**
   * Test case: Should return stats for a valid date range with "readWrite" Auth level and yearly granularity.
   *
   * This test verifies that the API returns the correct statistics for investments when a valid "readWrite" token
   * is provided, and the date range is valid with yearly granularity.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/stats with the token, a valid date range, and yearly granularity.
   * 3. Verify the response status and structure.
   */
  it('should return stats for a valid date range with "readWrite" Auth level and yearly granularity', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Verify the token response
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request investment stats with yearly granularity
    const { body, statusCode } = await request
      .get('/api/investment/stats')
      .set('Cookie', `authToken=${authTokenValue}`)
      .query({
        startDate: '2018-01-01',
        endDate: '2024-12-31',
        granularity: 'year',
      });

    // Verify the status code
    expect(statusCode).toBe(200);

    // Verify that the response has the expected structure
    expect(body).toHaveProperty('status');
    expect(body.status).toBe('success');

    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('totalInvestments');
    expect(body.data).toHaveProperty('totalValue');
    expect(body.data).toHaveProperty('details');

    const { details } = body.data;
    expect(typeof details).toBe('object');
    Object.keys(details).forEach((year) => {
      expect(details[year]).toHaveProperty('count');
      expect(details[year]).toHaveProperty('totalValue');
    });
  });

  /**
   * Test case: Should return stats for a valid date range with "readWrite" Auth level and monthly granularity.
   *
   * This test verifies that the API returns the correct statistics for investments when a valid "readWrite" token
   * is provided, and the date range is valid with monthly granularity.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/stats with the token, a valid date range, and monthly granularity.
   * 3. Verify the response status and structure.
   */
  it('should return stats for a valid date range with "readWrite" Auth level and monthly granularity', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user2', password: 'password2' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Verify the token response
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request investment stats with monthly granularity
    const { body, statusCode } = await request
      .get('/api/investment/stats')
      .set('Cookie', `authToken=${authTokenValue}`)
      .query({
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        granularity: 'month',
      });

    // Verify the status code
    expect(statusCode).toBe(200);

    // Verify that the response has the expected structure
    expect(body).toHaveProperty('status');
    expect(body.status).toBe('success');

    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('totalInvestments');
    expect(body.data).toHaveProperty('totalValue');
    expect(body.data).toHaveProperty('details');

    const { details } = body.data;
    expect(typeof details).toBe('object');
    Object.keys(details).forEach((month) => {
      expect(details[month]).toHaveProperty('count');
      expect(details[month]).toHaveProperty('totalValue');
      expect(typeof details[month].count).toBe('number');
      expect(typeof details[month].totalValue).toBe('number');
    });
  });

  /**
   * Test case: Should return stats for a valid date range with "readWrite" Auth level and weekly granularity.
   *
   * This test verifies that the API returns the correct statistics for investments when a valid "readWrite" token
   * is provided, and the date range is valid with weekly granularity.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/stats with the token, a valid date range, and weekly granularity.
   * 3. Verify the response status and structure.
   */
  it('should return stats for a valid date range with "readWrite" Auth level and weekly granularity', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user3', password: 'password3' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Verify the token response
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request investment stats with weekly granularity
    const { body, statusCode } = await request
      .get('/api/investment/stats')
      .set('Cookie', `authToken=${authTokenValue}`)
      .query({
        startDate: '2022-01-01',
        endDate: '2022-12-31',
        granularity: 'week',
      });

    // Verify the status code
    expect(statusCode).toBe(200);

    // Verify that the response has the expected structure
    expect(body).toHaveProperty('status');
    expect(body.status).toBe('success');

    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('totalInvestments');
    expect(body.data).toHaveProperty('totalValue');
    expect(body.data).toHaveProperty('details');

    const { details } = body.data;
    expect(typeof details).toBe('object');
    Object.keys(details).forEach((week) => {
      expect(details[week]).toHaveProperty('count');
      expect(details[week]).toHaveProperty('totalValue');
      expect(typeof details[week].count).toBe('number');
      expect(typeof details[week].totalValue).toBe('number');
    });
  });

  /**
   * Test case: Should return error for an invalid granularity value with "readWrite" Auth level.
   *
   * This test verifies that the API returns an error when an invalid granularity value is provided
   * with a valid "readWrite" token.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/stats with the token, a valid date range, and an invalid granularity value.
   * 3. Verify the response status and error message.
   */
  it('should return error for an invalid granularity value with "readWrite" Auth level', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Verify the token response
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request investment stats with an invalid granularity value
    const { statusCode } = await request
      .get('/api/investment/stats')
      .set('Cookie', `authToken=${authTokenValue}`)
      .query({
        startDate: '2023-01-01',
        endDate: '2023-12-31',
        granularity: 'wrong', // Invalid granularity
      });

    // Verify the status code
    expect(statusCode).toBe(404); // Assuming the API returns a 404 error for invalid granularity
  });

  // Additional tests for missing or incorrect dates and default granularity should be added
});
