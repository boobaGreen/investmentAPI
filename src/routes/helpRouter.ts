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
      {
        method: 'POST',
        path: '/api/token',
        description:
          'Endpoint to obtain a JWT token. Sends a POST request with "username" and "password". If correct, returns an HTTP-only JWT cookie with authLevel "readWrite", valid once. If incorrect or missing fields, returns an error. If the payload is empty, returns a single-use JWT token with "read" auth level.',
      },
      {
        method: 'POST',
        path: '/api/investment',
        description:
          'Endpoint to create a new investment. Requires a single-use JWT token with "readWrite" auth level in the cookie. The request body must include "value" (integer) and "annualInterestRate" (float). If any required field is missing or if the JWT token does not have sufficient permissions, the server will return an error. On successful creation, the server responds with a 201 status and the newly created investment object. Example success response: { "status": "success", "data": { "id": 239, "createdAt": "2024-07-22T20:56:58.056Z", "confirmedAt": null, "value": 3330000, "annualInterestRate": 15 } }. If the token has only "read" permissions, the response will be a 403 Forbidden with an appropriate JSON message. If required fields are missing in the request body, the server will return a 400 Bad Request with a message: { "status": "fail", "message": "Missing value or annualInterestRate in request body" }.',
      },
      {
        method: 'GET',
        path: '/api/investment',
        description:
          'Endpoint to get a list of all investments. Requires a JWT token (single-use) in the cookie with "read" or "readWrite" auth level. Returns a list of investments with details including value, annual interest rate, creation date, and confirmation status.',
      },
      {
        method: 'GET',
        path: '/api/investment/stats',
        description:
          'Endpoint to retrieve investment statistics for a specified date range and granularity. Requires a JWT token (single-use) in the cookie with "read", "readWrite", or "read" auth level. The query parameters must include "startDate" (YYYY-MM-DD), "endDate" (YYYY-MM-DD), and "granularity" (one of "day", "week", "month", "year"). If any of these parameters are missing or if the JWT token does not have sufficient permissions, the server will return an error. On successful retrieval, the server responds with a 200 status and the investment statistics. Example success response: { "status": "success", "data": { "totalInvestments": 150, "totalValue": 5000000, "details": { "day": [ ... ], "week": [ ... ], "month": [ ... ], "year": [ ... ] } } }. If the token has insufficient permissions, the response will be a 403 Forbidden with an appropriate JSON message. If any required query parameters are missing, the server will return a 400 Bad Request with a message: { "status": "fail", "message": "Missing startDate, endDate, or granularity in query parameters" }.',
      },
    ],
  });
});

export default router;
