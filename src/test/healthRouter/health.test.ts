import request from '../setupTest';

describe('Server Health Check', () => {
  /**
   * Test case: Verifies that the server responds with a 200 OK status and the expected health message.
   *
   * Steps:
   * 1. Make a GET request to the /api/health endpoint.
   * 2. Check that the response status code is 200.
   * 3. Verify that the response body contains the expected message.
   */
  it('should respond with 200 OK', async () => {
    // Make a GET request to the health check endpoint
    const { statusCode, body } = await request.get('/');

    // Check that the response status code is 200
    expect(statusCode).toBe(200);

    // Verify that the response body contains the expected message
    expect(body.message).toEqual('Server is healthy');
  });
});
