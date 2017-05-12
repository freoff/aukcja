import * as express from 'express';
import * as multer from 'multer';
import { Config } from '../../config/config';
import * as os from 'os';
import * as sharp from 'sharp';
import * as mongo from 'mongodb';

export const router = express.Router();
let upload = multer({
  dest: os.tmpdir(), limits: Config.SIZE_10MB, fileFilter: function (req, file, cb) {
    cb(null, (file.mimetype.startsWith('image', 0)));
  }
});

router.post('/temp', function (req, res, next) {

});

router.get('/', function (req, res, next) {
  //TODO implements api/aukcja/


  return res.status(200).json('ok');
});
router.put('/nowaAukcja/:aukcjaId', upload.single('plik'), (req, res, next) => {
  console.log(req.file);
  if (req.file === undefined)
    res.status(412).json(new Error('barak pliku'));
  else {
    sharp(req.file.path).metadata((err, metadata) => {
      if (err)
        res.status(406).send(new Error('To nie jest obrazek'));
      else {
        let nowaaukcja = {
          aukcjaId: req.params.aukcjaId,
          plik: req.file,
          orientation: metadata.orientation,
          plikId: req.body.plikId
        };
        let collection = req.app.locals.db.collection('TempAukcja');
        collection.findOneAndUpdate()
        res.status(201).json(nowaaukcja);
      }
    });
  }
});