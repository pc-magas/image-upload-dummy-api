const express = require('express');
const app = express();
const conf = require('./config/web');
const imageController = require('./controller/image');

app.get('/',(req,res)=>{
    res.send('Hello world!!!');
});

app.use('/image',imageController);

app.all('*',(req,res)=>{
    res.status(501).json({
        'message':req.method+" into "+req.url+" is not implemented"
    })
});

app.listen(conf.listen_port,()=>{
    console.log('Listening into http://localhost:'+conf.listen_port);
});