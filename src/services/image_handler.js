const fs = require('fs');
const settings= require('../config/file');


module.exports={
    /**
     * Method that saves the file over the preconfigured path.
     * @param Sting fileData The base64 encoded data
     * @param Function callback The callback to return the result.
     */
    'save_file':function(fileData,fileName,callback) {
        const fileDataDecoded = Buffer.from(fileData,'base64');
        if()
    },
}

