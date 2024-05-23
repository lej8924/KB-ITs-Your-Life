const fs = require("fs").promises;

fs.readdir("./")
.then((result)=>console.log(result))
.then((result)=>console.log("Code is done"))