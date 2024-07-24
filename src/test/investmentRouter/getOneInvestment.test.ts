import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for GET /api/investment/:id
describe('GET One Investment', () => {
  /**
   * Test case: Should return a single investment with a valid ID and a "readWrite" token.
   *
   * This test verifies that a single investment is returned successfully when a valid "readWrite" token and a valid ID are used.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/:id with the token and a valid ID.
   * 3. Verify the response status and structure.
   */
  it('should return a single investment with a valid ID and readWrite token', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const { body, status } = await request
      .get(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`);

    expect(status).toBe(200);
    expect(body).toHaveProperty('status', 'success');
    expect(body).toHaveProperty('data');
    expect(body.data).toHaveProperty('id', investmentId);
  });

  /**
   * Test case: Should return a 404 error for a non-existing investment ID.
   *
   * This test verifies that a 404 error is returned when a non-existing investment ID is used.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" token.
   * 2. Make a GET request to /api/investment/:id with the token and a non-existing ID.
   * 3. Verify the response status and error message.
   */
  it('should return a 404 error for a non-existing investment ID', async () => {
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user2', password: 'password2' });

    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    const nonExistingInvestmentId = 9999; // Assuming this ID does not exist in your database
    const { status } = await request
      .get(`/api/investment/${nonExistingInvestmentId}`)
      .set('Cookie', `authToken=${authTokenValue}`);

    expect(status).toBe(404);
  });

  /**
   * Test case: Should return an error with invalid token when accessing a single investment.
   *
   * This test verifies that an invalid token results in an error when attempting to access a single investment.
   *
   * Steps:
   * 1. Make a GET request to /api/investment/:id with an invalid token.
   * 2. Verify the response status and error message.
   */
  it('should return an error with invalid token when accessing a single investment', async () => {
    const invalidToken = 'invalidToken';

    const investmentId = 1; // Assuming this ID exists in your seeded database
    const { status } = await request
      .get(`/api/investment/${investmentId}`)
      .set('Cookie', `authToken=${invalidToken}`);

    expect(status).toBe(404);
  });
});
