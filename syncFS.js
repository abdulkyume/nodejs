const fs = require("fs");
const http = require("http");


try {
    const data = fs.readFileSync("./hello.txt", "utf-8")
    console.log(data);
} catch (error) {
    console.log(error);
}

console.log("File Read Succefully")