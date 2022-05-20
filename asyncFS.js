const fs = require("fs"); 

// readfile
fs.readFile("./hello.txt", "utf-8", (err,data)=>{
    if(err) throw err;
    console.log(data);
});

console.log("File Read Succefully")