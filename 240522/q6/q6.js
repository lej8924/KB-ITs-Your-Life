const express = require("express");
const app = express();

const port  = 3000;

app.get("/index",(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "/index.html")
})

app.get("/login",(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "/login.html")
})
app.get("/info",(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "/info.html")
})
app.get("/place",(req,res)=>{
    res.status(200);
    res.sendFile(__dirname + "/place.html")
})
app.listen(port,()=>{
    console.log(`${port}번 포트에서 서버 실행 중`);
})
