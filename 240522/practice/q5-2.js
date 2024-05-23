const fs = require("fs").promises;

async function readFileSync(){
    const files = await fs.readdir("./");
    console.log(files);
    console.log("Code is done");
}

readFileSync();