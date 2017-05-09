"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by freo on 28.04.17.
 */
var express = require("express");
exports.router = express.Router();
exports.router.get('/', function (req, res, next) {
    res.status(200).json('ok');
}); //
exports.router.post('/nowa', function (req, res, next) {
    res.send('ok');
});
//# sourceMappingURL=aukcja.js.map