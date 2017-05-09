"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aws = require("aws-sdk");
var shortid = require("shortid");
var Config = (function () {
    function Config() {
    }
    Config.Key = function () {
        return shortid.generate();
    };
    return Config;
}());
Config.SIZE_1MB = 1024 * 1024;
Config.SIZE_10MB = 1024 * 1024 * 10;
Config.BUCKET = 'freo.aukcja';
Config.multerproperties = {
    dest: '/home/freo/ws/temp/aukcje'
};
Config.isAwsSet = (function () {
    aws.config.update({
        region: 'eu-central-1',
        credentials: new aws.FileSystemCredentials('./credentials.json'),
        s3: {
            region: 'eu-central-1'
        }
    });
    return true;
})();
exports.Config = Config;
//# sourceMappingURL=config.js.map