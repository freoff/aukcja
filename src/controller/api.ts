
import * as express from 'express';
import {router as apiAukcja} from './api/aukcja';
export const router = express.Router();
router.use('/aukcja',apiAukcja);//root api
///blb