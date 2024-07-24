import request from '../setupTest'; // Ensure that the path to the setupTest module is correct

import { getCookieValue } from '../../utils/cookieUtils';

describe('Token Router', () => {
  it('should return a readWrite token when valid credentials are provided', async () => {
    // Send a POST request to obtain a token with valid credentials
    const { body, statusCode, headers } = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'testpass' });

    // Verify that the response status code is 200 (OK)
    expect(statusCode).toBe(200);
    // Check that the response status is 'success'
    expect(body).toHaveProperty('status', 'success');
    // Check the response message indicating a readWrite token
    expect(body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "readWrite" auth access',
    );

    // Extract cookies from the response headers
    const cookies = headers['set-cookie'];

    // Get the value of the 'authToken' cookie
    const authTokenValue = Array.isArray(cookies)
      ? getCookieValue(cookies, 'authToken')
      : undefined;

    // Ensure that the auth token value is defined
    expect(authTokenValue).toBeDefined();
  });

  it('should return a read-only token when no username and password are provided', async () => {
    // Send a POST request without credentials to obtain a token
    const { body, statusCode, headers } = await request
      .post('/api/token')
      .send({});

    // Verify that the response status code is 200 (OK)
    expect(statusCode).toBe(200);

    // Check that the response status is 'success'
    expect(body).toHaveProperty('status', 'success');
    // Check the response message indicating a read-only token
    expect(body).toHaveProperty(
      'message',
      'Token has been set as a cookie with "read" auth access',
    );

    // Extract cookies from the response headers
    const cookies = headers['set-cookie'];

    // Get the value of the 'authToken' cookie
    const authTokenValue = Array.isArray(cookies)
      ? getCookieValue(cookies, 'authToken')
      : undefined;

    // Ensure that the auth token value is defined
    expect(authTokenValue).toBeDefined();
  });

  it('should return an error when invalid password is provided', async () => {
    // Send a POST request with an invalid password
    const { statusCode } = await request
      .post('/api/token')
      .send({ username: 'testuser', password: 'wrongpass' });

    // Verify that the response status code is 404 (Unauthorized)
    expect(statusCode).toBe(404);
  });

  it('should return an error when invalid user is provided', async () => {
    // Send a POST request with an invalid username
    const { statusCode } = await request
      .post('/api/token')
      .send({ username: 'wronguser', password: 'testpass' });

    // Verify that the response status code is 404 (Unauthorized)
    expect(statusCode).toBe(404);
  });

  it('should return an error when missing username or password', async () => {
    // Send a POST request with a missing password
    const { statusCode } = await request
      .post('/api/token')
      .send({ username: 'testuser' });

    // Verify that the response status code is 404 (Bad Request)
    expect(statusCode).toBe(404);
  });
});
