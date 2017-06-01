import * as aws from "aws-sdk";
import * as AWS from "aws-sdk";
import * as shortid from "shortid";
import {Options} from "multer";
import * as os from "os";
import * as path from 'path';
export class Config {
    private static credentialsPath = path.resolve(__dirname +  '/../../credentials.json');
    private static _isAwsIsSet = false;
    private static s3: AWS.S3 = null;
    public static SIZE_1MB: number = 1024 * 1024;
    public static SIZE_10MB: number = 1024 * 1024 * 10;
    public static BUCKET: string = 'aukcja.zdjecia';
    public static MONGO_URL: string = 'mongodb://127.0.0.1:22222/aukcja';
    public static db;
    public static PORT = 3000;

    public static multerproperties: Options = {
        dest: os.tmpdir()
    }

    public static Key() {
        return shortid.generate();
    }

    public static GETS3(): Promise<aws.S3> {
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
                signatureVersion: 'v4',
            });


        }
        return Promise.resolve(this.s3);
    }
}






