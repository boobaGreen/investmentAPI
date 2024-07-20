// eslint-disable-next-line import/no-import-module-exports
import express from 'express';

import { getToken } from '../controllers/tokenController';

// const router = express.Router({ mergeParams: true }); // mergeparams?? -------------
const router = express.Router(); // mergeparams?? -------------

router.route('/').post(getToken);

export default router;
