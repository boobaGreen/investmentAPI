// eslint-disable-next-line import/no-import-module-exports
import express from 'express';

import { authRead, authWrite } from '../midllewares/authMiddleware';
import {
  getAllInvestments,
  createInvestment,
  getInvestmentStats,
} from '../controllers/investmentController';

// const router = express.Router({ mergeParams: true }); // mergeparams?? -------------
const router = express.Router(); // mergeparams?? -------------

router
  .route('/')
  .get(authRead, getAllInvestments)
  .post(authWrite, createInvestment); // createInvestment

router.route('/stats').get(authRead, getInvestmentStats);
// .post(orderController.createOrder);

export default router;
