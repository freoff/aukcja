import * as express from 'express';
import * as multer from 'multer';
import { Config } from '../../config/config';
import * as os from 'os';
import * as sharp from 'sharp';


export const router = express.Router();
let upload = multer({ dest: os.tmpdir(), limits:Config.SIZE_10MB, fileFilter: function(req,file,cb) {
  cb(null,(file.mimetype.startsWith('image', 0)));
}});

router.post('/temp', function (req, res, next) {

});

router.get('/', function (req, res, next) {
  //TODO implements api/aukcja/


  return res.status(200).json('ok');
});
router.put('/nowaAukcja/:aukcjaId',upload.single('plik'), (req, res, next) => {
  let aukcjaId = req.params.aukcjaId;
  let plik = req.file;
  let orientation:number;
  sharp(plik.path).metadata((err,metadata)=>{
    if(err) res.status(406).send(`<p>Plik nie jest obrazem</p>`);
    orientation = metadata.orientation;
  });
  console.log('In nowaaukcja PUT');
  console.log(aukcjaId);
  console.log(plik);



});