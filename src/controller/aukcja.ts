import * as express from "express";
import * as id from "shortid";
import * as multer from 'multer';
import { NowaAukcja } from '../model/nowaAukcja';
import { Config } from '../config/config';

const upload = multer(Config.multerproperties);
export const router: express.Router = express.Router();


router.get('/nowa', (req, res, next) => {
    let nowaAukcja = id.generate();
    let objectToSave: NowaAukcja = { aukcjaId: nowaAukcja, obrazki: [] };
    req.app.locals.db.collection('NowaAukcja').insertOne(objectToSave);
    res.render('aukcja/nowa', { aukcjaId: nowaAukcja, tutul: 'Nowa aukcja' });

});
router.post('/nowa', upload.single('plik'), (req, res, next) => {
    res.json({ body: req.body, file: req.file });
});
router.post('/nowa/obrazek/:aukcjaId', (req, res, next) => {
    res.status(200).json('ok');
});