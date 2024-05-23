const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    const {method,url} = req;
    res.setHeader("Content-Type","text/html")
    if(method=="GET" & url =="/contact"){
        const readStream = fs.createReadStream(__dirname + "/contact.html","utf-8");
        readStream.pipe(res);
    }else if(method=="GET" & url =="/home"){
        const readStream = fs.createReadStream(__dirname + "/home.html","utf-8");
        readStream.pipe(res);
    }else{
        const readStream = fs.createReadStream(__dirname + "/index.html","utf-8");
        readStream.pipe(res);
    }
})

server.listen(3000,()=>{
    console.log("listen port 3000")
})