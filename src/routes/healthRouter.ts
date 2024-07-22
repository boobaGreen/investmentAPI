import express from 'express';

const router = express.Router();

/**
 * Health Check Endpoint
 *
 * This route is used to verify that the server is up and running.
 * It provides a basic health check to confirm the server's status.
 *
 * @route GET /health
 * @returns {object} 200 - Returns a JSON object indicating that the server is healthy
 * @returns {object} 500 - Returns a JSON object indicating server error (if issues arise, though not handled in this example)
 */
router.get('/', (req, res) => {
  // Responding with a JSON object indicating the server is healthy
  res.status(200).json({
    status: 'success',
    message: 'Server is healthy',
  });
});

export default router;
