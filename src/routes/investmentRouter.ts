// Importing the Express module
import express from 'express';

// Importing authentication middleware
import { authRead, authWrite } from '../midllewares/authMiddleware'; // Corrected 'midllewares' to 'middlewares'

// Importing controllers to handle routes
import {
  getAllInvestments,
  createInvestment,
  getInvestmentStats,
} from '../controllers/investmentController';

// Creating a new Express router
// const router = express.Router({ mergeParams: true });
// Option 'mergeParams': allows the router to access parameters from parent routers
const router = express.Router(); // Creating the router without additional options

/**
 * Routes for managing investments
 *
 * These routes handle operations related to investments.
 * They include retrieving all investments and creating new ones.
 *
 * @route GET / - Retrieves a list of all investments.
 * @route POST / - Creates a new investment with the provided details.
 */
router
  .route('/')
  .get(authRead, getAllInvestments) // Retrieves all investments; requires 'read' authentication.
  .post(authWrite, createInvestment); // Creates a new investment; requires 'readWrite' authentication.

/**
 * Route for retrieving investment statistics
 *
 * This route provides statistics about investments within the specified parameters.
 *
 * @route GET /stats - Retrieves investment statistics based on query parameters.
 */
router.route('/stats').get(authRead, getInvestmentStats); // Retrieves investment statistics; requires 'read' authentication.

/**
 * Exporting the router
 *
 * This router is exported so it can be used in the main application file or other routers.
 */
export default router;
