/**
 * Created by freo on 28.04.17.
 */
import * as express from 'express';
import {Request, Response} from 'express';
export const router = express.Router();

router.get('/',(req:Request,res: Response,next)=>{
    res.status(200).json('ok');
});//
