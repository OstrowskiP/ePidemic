import {
  addHandler,
  getHandler,
  deleteByIdHandler,
  updateByIdHandler
} from './diseaseDefinition.controller';
import { Router } from 'express';

const router = new Router();

router.post('', addHandler);
router.get('', getHandler);
router.delete('/:diseaseDefinitionId', deleteByIdHandler);
router.put('/:diseaseDefinitionId', updateByIdHandler);

export default router;
