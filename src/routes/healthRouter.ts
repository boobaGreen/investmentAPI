// In tokenRouter.ts o investmentRouter.ts o in un router dedicato
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ status: 'success' });
});

export default router;
