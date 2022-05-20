const fs = require("fs");
const http = require("http");
// readfile
// fs.readFile("./hello.txt", "utf-8", (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });

// deletefile
// fs.unlink("./hello.txt", (err,data)=>{
//     if (err) throw err;
//     console.log("File deleted "+data);
// });

const server = http
  .createServer((req, res) => {
    fs.readFile("./hello.txt", "utf-8", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1><center>Server Running</center></h1>");
      res.write("<p>" + data + "</center></p>");
      res.end();
    });
  })
  .listen(3000, () => console.log("Server Running"));
