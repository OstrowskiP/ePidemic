import {
  addHandler,
  getHandler,
  deleteByIdHandler
} from './diseaseDefinition.controller';
import { Router } from 'express';

const router = new Router();

router.post('', addHandler);
router.get('', getHandler);
router.delete('/:diseaseDefinitionId', deleteByIdHandler);

export default router;
