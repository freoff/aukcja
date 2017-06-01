import * as express from "express";
import * as id from "shortid";
import * as multer from "multer";
import {Aukcja} from "../model/aukcja";
import {Config} from "../config/config";

const upload = multer(Config.multerproperties);
export const router: express.Router = express.Router();


router.get('/nowa', (req, res, next) => {
    let nowaAukcja = id.generate();
    req.app.locals.db.collection('Aukcja').insertOne(new Aukcja(nowaAukcja,'', []));

    res.render('aukcja/nowa', {aukcjaId: nowaAukcja, tutul: 'Nowa aukcja'});

});
router.post('/nowa', upload.single('plik'), (req, res, next) => {
    res.json({body: req.body, file: req.file});
});
router.post('/nowa/obrazek/:aukcjaId', (req, res, next) => {
    res.status(200).json('ok');
});
