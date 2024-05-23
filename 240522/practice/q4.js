const { log } = require("console");
const fs = require("fs");

const data2 = fs.readFile("example.txt",(error,file)=>{
    if(error){
        log("error");
    }
    log(file.toString());
})

log("이걸 보고 싶은 거였어 ======> 코드 끝");