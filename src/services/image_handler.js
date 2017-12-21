const fs = require('fs');
const settings = require('../config/file');

module.exports={
    /**
     * Method that saves the file over the preconfigured path.
     * @param Sting fileData The base64 encoded data
     * @param Function callback The callback to return the result.
     */
    'save_file':function(fileData,fileName,callback) {
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
     * @param callback The callback that returns the mime 
     */
    // 'image_mime':function(fileName,callback){
    //     const fileFullPath = settings.upload_dir+'/'+fileName;
    //     if()
    // }
}

