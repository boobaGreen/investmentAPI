import express from 'express';

const router = express.Router();

/**
 * API Documentation Endpoint
 *
 * This route provides information about all available endpoints in the API.
 * It serves as a help or documentation endpoint to guide developers
 * on how to interact with the API.
 *
 * @route GET /api
 * @returns {object} 200 - Returns a JSON object listing all available endpoints
 */
router.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'List of all available API endpoints',
    endpoints: [
      {
        method: 'GET',
        path: '/api',
        description:
          'API documentation endpoint to list all available endpoints',
      },
      {
        method: 'GET',
        path: '/api/health',
        description: 'Test endpoint to check if the server is up and running',
      },
      { method: 'POST', path: '/api/token', description: 'Get a new token' },
    ],
  });
});

/**
 * General Info Endpoint
 *
 * This route provides general information about the server and its status.
 * It can be used to verify basic server functionality.
 *
 * @route GET /api/info
 * @returns {object} 200 - Returns a JSON object indicating general server information
 * @returns {object} 500 - Returns a JSON object indicating server error (if issues arise, though not handled in this example)
 */
router.get('/info', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: '',
  });
});

export default router;
