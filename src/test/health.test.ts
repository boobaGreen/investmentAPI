import request from './setupTest';

describe('Server Health Check', () => {
  it('should respond with 200 OK', async () => {
    const response = await request.get('/api/health'); // Assumi che tu abbia una rotta di salute configurata
    expect(response.status).toBe(200);
  });
});
