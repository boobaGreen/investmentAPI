import request from '../setupTest';
import { parseCookies, getCookieValue } from '../../utils/cookieUtils';

// Test suite for DELETE /api/investment/:id
describe('DELETE an investment', () => {
  /**
   * Test case: Should delete an investment when auth token has "readWrite" access
   *
   * This test verifies that an investment can be successfully deleted when a valid "readWrite" auth token is provided.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" auth token by sending a POST request to /api/token.
   * 2. Use the token to make a DELETE request to /api/investment/:id.
   * 3. Verify the response status and body.
   */
  it('should delete an investment and return success WHEN auth token "readWrite"', async () => {
    // Request to obtain auth token
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user1', password: 'password1' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();
    // Request to delete an investment using the obtained token
    const { status } = await request
      .delete('/api/investment/1')
      .set('Cookie', `authToken=${authTokenValue}`);

    // Verify the successful deletion of investment
    expect(status).toBe(204);
  });
  /**
   * Test case: Should return a  404  error when deleting a non-existent investment
   *
   * This test verifies that the API correctly handles attempts to delete an investment
   * that does not exist in the database. An appropriate 404 (Not Found) error response
   * is expected.
   *
   * Steps:
   * 1. Obtain a valid "readWrite" auth token.
   * 2. Use the token to make a DELETE request to /api/investment/1000 (non-existent ID).
   * 3. Verify the response status code (404) and optionally check the error message in the body.
   */
  it('should return 404 error for non-existent investment', async () => {
    // Request to obtain auth token
    const tokenResponse = await request
      .post('/api/token')
      .send({ username: 'user2', password: 'password2' });

    // Parse cookies from response headers
    const cookies = parseCookies(tokenResponse.headers['set-cookie']);
    const authTokenValue = getCookieValue(cookies, 'authToken');

    // Check if token response is successful and token is defined
    expect(tokenResponse.status).toBe(200);
    expect(authTokenValue).toBeDefined();

    // Request to delete a non-existent investment using the obtained token
    const { status } = await request
      .delete('/api/investment/1000') // Use an invalid ID (1000)
      .set('Cookie', `authToken=${authTokenValue}`);

    // Verify 404 Not Found status code
    expect(status).toBe(404);
  });
});
