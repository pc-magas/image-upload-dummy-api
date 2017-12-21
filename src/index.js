const express = require('express');
const app = express()
const conf = require('./config/web');

app.get('/',(req,res)=>{
    res.send('Hello world!!!');
});

app.listen(conf.listen_port,()=>{
    console.log('Listening into http://localhost:'+conf.listen_port);
});