"use strict";
exports.__esModule = true;
var config_1 = require("../../src/config/config");
var fss = require("fs");
var FileService = (function () {
    function FileService(file) {
        this.file = file;
    }
    FileService.prototype.uploadToS3 = function () {
        config_1.Config.GETS3()
            .then(this._uploadFile.bind(this))
            .then(console.log, console.log);
    };
    FileService.prototype._uploadFile = function (s3) {
        return s3.upload({
            Bucket: config_1.Config.BUCKET,
            Key: 'testimage.jpg',
            Body: fss.readFileSync(this.file.path),
            ContentType: 'image/jpg',
            ACL: 'public-read'
        }).promise();
    };
    return FileService;
}());
var fs = new FileService({ path: '/home/freo/Desktop/20161225_150458.jpg' });
//console.log(fs);
//fs._uploadFile(null);
fs.uploadToS3();
