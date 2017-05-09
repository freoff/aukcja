"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var multer = require("multer");
exports.router = express.Router();
var upload;
exports.router.post('/temp', function (req, res, next) {
    var destination = '/home/freo/temp/' + req.body.aukcjaId;
    upload = multer({ dest: destination }).single('plik');
    upload(req, res, function (err) {
        res.json({ file: req.file.path });
    });
});
exports.router.get('/', function (req, res, next) {
    //TODO implements api/aukcja/
    return res.status(200).json('ok');
});
//# sourceMappingURL=obrazek.js.map