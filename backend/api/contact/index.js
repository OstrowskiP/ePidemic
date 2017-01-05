import {
    sendEmailHandler
} from './contact.controller'
import {Router} from 'express';

const router = new Router();

router.post('', sendEmailHandler);

export default router;
