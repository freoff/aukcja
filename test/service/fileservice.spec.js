const fs = require('../../app/service/fileService').FileService;

let l=console.log;

let fileservice = new fs({resizePath:'/home/freo/Desktop/20161225_150458.jpg'});
l(fileservice.file);
fileservice.uploadToS3();
