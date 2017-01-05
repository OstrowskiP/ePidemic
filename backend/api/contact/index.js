import {
    sendEmailHandler
} from './contact.controller'
import { Router } from 'express';

const router = new Router();

router.post('/contact', sendEmailHandler);
export default router;