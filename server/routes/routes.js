import express from 'express';

import {saveSentEmail,getEmails,moveEmailsToBin,toggleStarredEmails,deleteEmails} from '../controller/email-controller.js'

const router = express.Router();

router.post('/save',saveSentEmail);
router.get('/emails/:type',getEmails);
router.post('/save-draft',saveSentEmail);
router.post('/bin',moveEmailsToBin);
router.post('/starred',toggleStarredEmails)
router.delete('/delete',deleteEmails);

export default router;