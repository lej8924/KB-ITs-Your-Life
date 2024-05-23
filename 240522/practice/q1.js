const http = require("http");

const server = http.createServer((req,res) => {
    const {method, url} = req;
    if(method == "GET"){
        res.appendHeader("Content-Type","text/plain")
        res.write("Hello Node")
        res.end()
    }

})  

server.listen(3000,() => {
    console.log("open the server")
})