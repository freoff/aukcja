
import * as express from 'express';
import { router as apiAukcja } from './api/aukcja';
import { router as apiObrazek } from './api/obrazek';


export const router = express.Router();


router.use('/aukcja', apiAukcja);
router.use('/obrazek', apiObrazek);