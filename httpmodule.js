const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200, {"content-type":"text/html"})
    res.write("<h1><center>Server Running</center></h1>");
    res.end();
}).listen(3000, ()=>console.log("Server Running"));