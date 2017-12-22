const express = require('express');
const bodyParser = require('body-parser');
const imageModel = require('../services/image_handler');

const router = express.Router();
router.use(bodyParser.json({limit: '100mb'}));


/**
 * Upload an Image
 */
router.post('/',(req,res)=>{
    res.set('Access-Control-Allow-Origin','*');

    if (!req.body){
      return res.status(400).json({message:"Please provide an http body to this endpoint"}).send();
    }

    if(!req.body.data){
        return res.status(400).json({message:"Please provide the file data you want to upload"}).send();
    }

    if(!req.body.name){
        return res.status(400).json({message:"Please provide the filename you want to upload"}).send();
    }

    imageModel.save_file(req.body.data,req.body.name,(err,fileFullPath,fileName)=>{
        if(err){
            return res.status(500).json({message:err.message}).send();
        }
        return res.status(201).json({
            message:"File created",
            path:fileFullPath,
            name:fileName
        }).send();
    })
});

/**
 * Get an image
 */
router.get('/:imageName',(req,res)=>{

    res.set('Access-Control-Allow-Origin','*');

    const imageName=req.params.imageName;
    imageModel.get_image(imageName,(err,mime,data)=>{
        if(err){
            if(err.code==="ENOENT"){
                return res.status(404).json({message:err.message}).send(); 
            }
            console.error(err.code);
            return res.status(500).json({message:err.message}).send();
        }
        res.set('Content-type',mime).send(data);
    });
});

/**
 * Handle Options and any other http request
 */
router.all('/',(req,res,next)=>{
    if(req.method==='OPTIONS'){
        return res.set('Access-Control-Allow-Origin','*')
        .set('Access-Control-Allow-Methods','POST,GET')
        .set('Access-Control-Allow-Headers','Content-type,Access-Control-Allow-Origin')
        .send();
    } else {
        next();
    }
});

module.exports=router;

