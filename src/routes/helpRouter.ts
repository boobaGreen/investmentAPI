import express from 'express';

const router = express.Router();

/**
 * API Documentation Endpoint
 *
 * This route provides comprehensive documentation about all available API endpoints.
 * It serves as a reference for developers on how to interact with the API.
 *
 * @route GET /api
 * @returns {object} 200 - Returns a JSON object listing all available endpoints with descriptions
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
          'Provides a list of all available API endpoints and their descriptions.',
      },
      {
        method: 'GET',
        path: '/api/health',
        description:
          'Health check endpoint to verify that the server is operational.',
      },
      {
        method: 'POST',
        path: '/api/token',
        description:
          'Generates a JWT token. Requires a POST request with "username" and "password". On success, returns an HTTP-only JWT cookie with "readWrite" permissions. If the credentials are incorrect or missing, a generic 400 error is returned. If the payload is empty, a single-use JWT token with "read" permissions is issued.',
      },
      {
        method: 'POST',
        path: '/api/investment',
        description:
          'Creates a new investment record. Requires a single-use JWT token with "readWrite" permissions in the cookie. The request body must include "value" (integer) and "annualInterestRate" (float). If required fields are missing or the JWT token lacks appropriate permissions, a generic 400 error will be returned. On successful creation, a 201 status is returned along with the newly created investment object. If the token has only "read" permissions, a 400 error is returned, and if required fields are missing from the request body, a 400 error is also returned.',
      },
      {
        method: 'GET',
        path: '/api/investment',
        description:
          'Retrieves a list of all investments. Requires a JWT token (single-use) in the cookie with "read" or "readWrite" permissions. Returns a detailed list of investments including value, annual interest rate, creation date, and confirmation status.',
      },
      {
        method: 'GET',
        path: '/api/investment/stats',
        description:
          'Fetches investment statistics based on a specified date range and granularity. Requires a JWT token (single-use) in the cookie with "read", "readWrite", or "read" permissions. Query parameters must include "startDate" (YYYY-MM-DD), "endDate" (YYYY-MM-DD), and "granularity" (one of "day", "week", "month", "year"). If any required parameter is missing or if the token does not have sufficient permissions, a generic 400 error is returned. On successful retrieval, a 200 status code is returned with the investment statistics.',
      },
      {
        method: 'PATCH',
        path: '/api/investment',
        description:
          'Updates an existing investment record. Requires a single-use JWT token with "readWrite" permissions in the cookie. The request body can include the following fields: "value" (integer), "annualInterestRate" (float), and "confirmedAt" (ISO 8601 date format). The "confirmedAt" date must be greater than the creation date of the investment. If any field is invalid or missing, or if the JWT token lacks appropriate permissions, a generic 400 error is returned. On successful update, a 200 status code is returned with the updated investment object.',
      },
    ],
  });
});

export default router;
