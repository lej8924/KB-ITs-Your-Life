const { read } = require("fs");

// const http = require("http");
const fs = require("fs").promises;

async function readDirAsync(){
    try{
        const files = await fs.readdir("./")
        console.log(files);
    }catch{
        console.error(err);
    }
}
readDirAsync();

async function printName(){
    return "eunjae"
}
console.log(printName());
// fs.readdir("./",(err,files)=>{
//     if(err){
//         console.error(err)
//     }
//     console.log(files);
// });
// console.log("code is done")
// .finally(() => console.log("hello"))
// const server = http.createServer((req,res) =>{
//     console.log(req.method);
//     res.setHeader("Context-Type","text/html");
//     // res.write("Hello Node");
//     // res.end();
//     const readStream = fs.createReadStream(__dirname + "/index.html");
//     readStream.pipe(res);
// })

// server.listen(3000, ()=>{
//     console.log("3000번 포트에서 서버 실행 중")
// })