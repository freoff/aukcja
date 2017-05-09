"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var aukcja_1 = require("./api/aukcja");
var obrazek_1 = require("./api/obrazek");
exports.router = express.Router();
exports.router.use('/aukcja', aukcja_1.router);
exports.router.use('/obrazek', obrazek_1.router);
//# sourceMappingURL=api.js.map