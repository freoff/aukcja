import {Config} from '../../src/config/config';
import * as fss from "fs";
import * as sharp from "sharp";
import {FileToUpload} from "../../src/interface/FileToUpload";

class FileService {
  private file;
  constructor(file){
    this.file=file;
  }
  public uploadToS3(){
    Config.GETS3()
      .then(this._uploadFile.bind(this))
      .then(file=>console.log(file.Location));
      
  }

  private _uploadFile(s3:AWS.S3):Promise<AWS.S3.ManagedUpload.SendData>{
    
    return s3.upload({
      Bucket:Config.BUCKET,
      Key:'testimage.jpg',
      Body: fss.readFileSync(this.file.path),
      ContentType:'image/jpg',
      ACL:'public-read'
    }).promise();
  }
}


let fs = new FileService({path:'/home/freo/Desktop/20161225_150458.jpg'});
//console.log(fs);
//fs._uploadFile(null);
fs.uploadToS3();