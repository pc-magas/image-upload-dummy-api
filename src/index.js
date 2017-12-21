const express = require('express');
const app = express()
const conf = require('./config/web');

app.post()

app.listen(conf.listen_port,()=>{
    console.log('Listening into http://localhost:'+conf.listen_port);
});