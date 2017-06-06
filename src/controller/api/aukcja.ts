/**
 * Created by freo on 28.04.17.
 */
import * as express from "express";
import {Request, Response} from "express";
import * as multer from "multer";
import * as os from "os";
import {Config} from "../../config/config";
import {FileToUpload} from "../../interface/FileToUpload";
import * as sharp from "sharp";
import {FileService} from "../../service/fileService";
const upload = multer({
    dest: os.tmpdir(),
    limits: {fileSize: Config.SIZE_10MB}
});
export const router = express.Router();
router.get('/', (req, res, next) => {
    res.json(req.url);
});
router.put('/', (req: Request, res: Response, next) => {
    res.json([req.method, req.url]);
});//

router.post('/:aukcjaId', (req, res, next) => {
    res.json([req.method, req.url]);
});
router.delete('/:aukcjaId', function (req, res, next) {
    //TODO implement
    res.json([req.method, req.url]);
});

router.route('/:aukcjaId/obrazek/:obrazekId')
    .delete((req, res, next) => {
        //TODO implement
        res.json([req.method, req.url]);
    })
    .put(upload.single('plik'), (req, res, next) => {
        let file: FileToUpload = req.file;
        if (file === undefined) {
            res.status(412).json('_412_Precondition failed Brak pliku');
        } else {
            let sharpfile = sharp(file.path);
            sharpfile.metadata((err, metadata) => {
                if (err) res.status(415).json('_415_Unsuported media typeTo nie zdjecie');
                else {
                    file.id = req.params.obrazekId;
                    file.orientation = metadata.orientation;
                    let fileService: FileService = new FileService(file);
                    let db = Config.db;
                    console.log('Start resize ans send file');
                    fileService.resize().then(fileService.uploadToS3).then(console.log).catch(console.log);

                    // fileService.resize().then(fileService.uploadToS3).then(console.log).catch(console.log);
                    res.json(file);

                }
            });

        }


    });
