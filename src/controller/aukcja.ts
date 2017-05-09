import * as express from "express";
import * as id from "shortid";
import * as multer from 'multer';
import {Config } from '../config/config';

const upload = multer(Config.multerproperties);
export const router: express.Router = express.Router();


router.get('/nowa', (req, res, next) => {
    res.render('aukcja/nowa', {aukcjaId: id.generate(), tutul: 'Nowa aukcja'});

});
router.post('/nowa',upload.single('plik'), (req,res,next)=>{
     res.json({body:req.body,file:req.file});
});
router.post('/nowa/obrazek/:aukcjaId',(req,res,next)=>{
    
});