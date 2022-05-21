const express = require("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
});
app.get("/user", (req, res)=>{
    res.send("Hello user");
});
app.listen(3000, ()=>{console.log("Server Running on Port - 3000")});