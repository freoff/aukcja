"use strict";
exports.__esModule = true;
var aws = require("aws-sdk");
var AWS = require("aws-sdk");
var shortid = require("shortid");
var os = require("os");
var path = require("path");
var Config = (function () {
    function Config() {
    }
    Config.Key = function () {
        return shortid.generate();
    };
    Config.GETS3 = function () {
        if (!this._isAwsIsSet) {
            aws.config.update({
                region: 'eu-central-1',
                credentials: new aws.FileSystemCredentials(this.credentialsPath),
                // credentials: new aws.FileSystemCredentials('./credentials.json'),
                s3: {
                    region: 'eu-central-1'
                }
            });
            this._isAwsIsSet = true;
        }
        if (this.s3 === null) {
            this.s3 = new AWS.S3({
                signatureVersion: 'v4'
            });
        }
        return Promise.resolve(this.s3);
    };
    return Config;
}());
Config.credentialsPath = path.resolve(__dirname + '/../../credentials.json');
Config._isAwsIsSet = false;
Config.s3 = null;
Config.SIZE_1MB = 1024 * 1024;
Config.SIZE_10MB = 1024 * 1024 * 10;
Config.BUCKET = 'aukcja.zdjecia';
Config.MONGO_URL = 'mongodb://127.0.0.1:22222/aukcja';
Config.PORT = 3000;
Config.multerproperties = {
    dest: os.tmpdir()
};
exports.Config = Config;
