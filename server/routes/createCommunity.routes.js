import express from 'express';
import { createCommunity } from '../controllers/createCommunity.controller.js';




const router = express.Router();

router.post('/create', createCommunity)

export default router;