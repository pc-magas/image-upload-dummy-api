const fs = require('fs');
const fileType = require('file-type');
const settings = require('../config/file');

module.exports={
    /**
     * Method that saves the file over the preconfigured path.
     * @param Sting fileData The base64 encoded data
     * @param Function callback The callback to return the result.
     */
    'save_file':function(fileData,fileName,callback) {
        
        fileData=fileData.replace(/^data:\w*\/.*;base64,/gm,'');
        const fileFullPath = settings.upload_dir+'/'+fileName;
        const fileDataDecoded = Buffer.from(fileData,'base64');

        fs.writeFile(fileFullPath,fileDataDecoded,(err)=>{
            if(err){
                return callback(err);
            }
            callback(null,fileFullPath,fileName); 
        });
    },
    /**
     * An UNSAFE way of getting the image type.
     * It is just for demonstration purpoce.
     * @param String Filename The image name to get the data
     * @param Function callback The callback that returns the mime 
     */
    'get_image':function(fileName,callback){
        const fileFullPath = settings.upload_dir+'/'+fileName;
        fs.readFile(fileFullPath,(err,data)=>{
            if(err){
               return callback(err);
            }

            const mimeType = fileType(data);
            callback(null,mimeType,data);
        });
    }
}

