"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var id = require("shortid");
var multer = require("multer");
var config_1 = require("../config/config");
var upload = multer(config_1.Config.multerproperties);
exports.router = express.Router();
exports.router.get('/nowa', function (req, res, next) {
    res.render('aukcja/nowa', { aukcjaId: id.generate(), tutul: 'Nowa aukcja' });
});
exports.router.post('/nowa', upload.single('plik'), function (req, res, next) {
    res.json({ body: req.body, file: req.file });
});
exports.router.post('/nowa/obrazek/:aukcjaId', function (req, res, next) {
});
//# sourceMappingURL=aukcja.js.map