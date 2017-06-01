export interface FileToUpload extends Express.Multer.File {
    resizePath?: string;
    orientation?: number;
    url?: string;
    id?:string;
}
