const file={
    'upload_dir':process.env.UPLOAD_DIR
}

if(!file.upload_dir){
    
    const path = require('path');
    file.upload_dir=path.resolve(__dirname+'/../../','data');
    if(!path.exists(file.upload_dir)){
        console.log('Generating the data upload dir:'+file.upload_dir);
    }
}

module.exports=file;