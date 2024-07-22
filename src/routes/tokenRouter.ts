import express from 'express';
import getToken from '../controllers/tokenController';

// Creating a new Express router
// const router = express.Router({ mergeParams: true });
// Option 'mergeParams': allows the router to access parameters from parent routers
const router = express.Router(); // Creating the router without additional options

/**
 * Route for obtaining a token
 *
 * This route is responsible for generating and returning an authentication token.
 * The token is issued based on the provided credentials or as a default token.
 *
 * @route POST / - Generates a new authentication token.
 */
router.route('/').post(getToken); // Handles POST requests to generate a token

/**
 * Exporting the router
 *
 * This router is exported so it can be used in the main application file or other parts of the application.
 */
export default router;
