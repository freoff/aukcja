import { Config } from "../config/config";
import * as fs from "fs";
import * as sharp from "sharp";
import { FileToUpload } from "../interface/FileToUpload";
import * as AWS from "aws-sdk";
class FileService {
	private file: FileToUpload = null;

	constructor(file: FileToUpload) {
		this.file = file;

	}

	public _uploadToS3(s3: AWS.S3) {
		return s3.upload({
			Bucket: Config.BUCKET,
			Key: this.file.filename + '.jpg',
			Body: fs.readFileSync(this.file.resizePath),
			ContentType: 'image/jpg'
		}).promise();
	}


	public uploadToS3() {


		Config.GETS3()
			.then(s3 => this._uploadToS3.bind(this))
			.then(fileFromS3  => {
				this.file.url = fileFromS3.Location;
				return Promise.resolve(this.file);
			});

	}


	public resize() {
		this.file.resizePath = this.file.path + '.jpg';
		return sharp(this.file.path)
			.resize(800)
			.jpeg()
			.withMetadata({ orientation: this.file.orientation })
			.toFile(this.file.resizePath);
	}
}

export { FileService }
