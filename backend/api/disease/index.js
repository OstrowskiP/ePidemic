import {
  addHandler,
  getHandler
} from './disease.controller';

import { Router } from 'express';

const router = new Router();

router.post('', addHandler);
router.get('', getHandler);

export default router;
