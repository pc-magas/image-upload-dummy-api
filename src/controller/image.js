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

// router.get('/image',(req,res)=>{

// });

module.exports=router;

