const express = require('express');
const bodyParser = require('body-parser');
const imageModel = require('../services/image_handler');

const router = express.Router();
router.use(bodyParser.json({limit: '100mb'}));

router.post('/',(req,res)=>{
    
    if (!req.body){
      return res.status(400).json({message:"Please provide an http body to this endpoint"}).send();
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

router.get('/:imageName',(req,res)=>{
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

module.exports=router;

