const fs = require("fs");
const path = require("path");

var data = fs.readFileSync('./me.txt', "utf8").toString();
console.log(data);

if (data){
    fs.writeFileSync('./you.txt', data);
}
var plus = "\n\************\n\
    나는 별이야\n\
    제일 빛나\n\
*************";

fs.writeFileSync("./you.txt",data + plus);
