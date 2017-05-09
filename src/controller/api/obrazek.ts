import * as express from 'express';
import * as multer from 'multer';

export const router = express.Router();
let upload;

router.post('/temp',function(req,res,next) {
  let destination = '/home/freo/temp/'+req.body.aukcjaId;
  upload = multer({dest:destination }).single('plik');
  upload(req,res,err=>{
    res.json({file:req.file.path});
  });

});

router.get('/',function(req,res,next) {
  //TODO implements api/aukcja/


  return res.status(200).json('ok');
})