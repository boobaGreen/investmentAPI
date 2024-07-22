import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

describe('Investment Stats API', () => {
  it('should return stats for a valid date range with "readWrite" Auth level and yearly granularity', async () => {
    // Request a token with valid credentials
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user4', password: 'password4' });

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

  it('should return stats for a valid date range with "readWrite" Auth level and monthly granularity', async () => {
    // Request a token with valid credentials
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

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

  it('should return stats for a valid date range with "readWrite" Auth level and weekly granularity', async () => {
    // Request a token with valid credentials
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user3', password: 'password3' });

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

  it('should return error for an invalid granularity value with "readWrite" Auth level', async () => {
    // Request a token with valid credentials
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user2', password: 'password2' });

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
    expect(statusCode).toBe(500); // Assuming the API returns a 500 error for invalid granularity
  });
});

// Additional tests for missing or incorrect dates and default granularity should be added
