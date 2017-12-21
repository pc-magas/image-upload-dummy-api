// A local http client to test the site.
const fs = require('fs');
const request = require('request');
const conf = require('./config/web');

let fileName=process.argv.slice(2);
console.log(fileName);

if(!fileName[0]){
    console.error("Please provide the filename");
    process.exit(1);
} else {
    fileName=fileName[0];
}

if(!fs.existsSync(fileName)){
    console.error("Please the filename does not exist");
    process.exit(1);
}

const responseCallback=(error, response, body)=>{
    if(error){
        console.error(error);
        process.exit(1);
    }
    console.log("Returned status code: \n"+response.status);
    console.log("Returned Body: \n"+body);
}

fs.readFile(fileName,(err,data)=>{
    if(err){
        console.error("Cannot read the data");
        process.exit(1);
    }

    request({
        method:'POST',
        uri: "http://localhost:9090/image",
        multipart:[
            {
                'content-type': 'application/json',
                'body': JSON.stringify({
                    name: fileName,
                    content: Buffer.from(data).toString('base64')
                }),
            }
        ]
    },responseCallback)
})
