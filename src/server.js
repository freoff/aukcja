"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var bodyparser = require("body-parser");
var api_1 = require("./controller/api");
var aukcja_1 = require("./controller/aukcja");
exports.morganEnable = function () {
    exports.app.use(morgan('dev'));
};
exports.app = express();
var server = exports.app.listen(3000, function (req, res) {
});
server.on('listening', function () {
    console.log("RUN:   http://localhost:" + server.address().port + " ");
});
exports.app.set('views', path.join(__dirname, 'views'));
exports.app.set('view engine', 'pug');
exports.app.locals.basedir = exports.app.get('views');
exports.app.locals.pretty = true;
exports.app.use(morgan('dev'));
exports.app.use(express.static(path.join(__dirname, 'static')));
exports.app.use(bodyparser.urlencoded({ extended: true }));
exports.app.use(bodyparser.json({ type: 'application/json' }));
exports.app.use('/', function (req, res, next) {
    next();
});
exports.app.use('/api', api_1.router);
exports.app.use('/aukcja', aukcja_1.router);
exports.app.get('/', function (req, res) {
    res.status(200).render('index', { title: 'Strona Główna' });
});
exports.app.use(function (err, req, res, next) {
    console.log(err);
});
module.exports = exports.app;
