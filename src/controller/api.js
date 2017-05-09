"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var aukcja_1 = require("./api/aukcja");
exports.router = express.Router();
exports.router.use('/aukcja', aukcja_1.router); //root api
///blb 
