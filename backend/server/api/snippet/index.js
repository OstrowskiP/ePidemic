import {
  addHandler,
  getHandler
} from './snippet.controller';

import { Router } from 'express';

const router = new Router();

router.post('/add', addHandler);
router.get('/get/:snippetId', getHandler);

export default router;
