import * as aws from "aws-sdk";
import * as shortid from "shortid";
import { Options } from 'multer';
export class Config {
    public static SIZE_1MB: number = 1024 * 1024;
    public static SIZE_10MB: number = 1024 * 1024 * 10;
    public static BUCKET: string = 'freo.aukcja';
    public static multerproperties: Options = {
        dest:'/home/freo/ws/temp/aukcje'
    }
    public static Key() {
        return shortid.generate();
    }
    
    static isAwsSet = (function () {
        aws.config.update({
            region: 'eu-central-1',
            credentials: new aws.FileSystemCredentials('./credentials.json'),
            s3: {
                region: 'eu-central-1'
            }
        })
        return true;
    })();
}






