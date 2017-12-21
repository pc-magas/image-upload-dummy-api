const fs = require('fs');
const path = require('path');

const file={
    'upload_dir':process.env.UPLOAD_DIR
}

if(!file.upload_dir){
    file.upload_dir=path.resolve(__dirname+'/../../','data');
}

if(!fs.existsSync(file.upload_dir)){
    console.log('Generating the data upload dir:'+file.upload_dir);
    try {
        fs.mkdirSync(file.upload_dir)
    } catch(err){
        console.error(err);
        process.exit(1);
    }
}

module.exports=file;