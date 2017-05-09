"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var multer = require("multer");
var router = express.Router();
var upload;
router.post('/temp', function (req, res, next) {
    var destination = '/home/freo/temp/' + req.body.aukcjaId;
    upload = multer({ dest: destination }).single('plik');
    upload(req, res, function (err) {
        res.json({ file: req.file.path });
    });
});
