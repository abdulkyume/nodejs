const express = require("express");
const app = express();

app.get('/', (req,res)=>{
    res.send("Hello World");
});

app.get('/users', (req,res)=>{
    res.send("users");
});

app.get('/profile', (req,res)=>{
    res.send("profile");
});

app.listen(3000, ()=>{
    console.log("Server Started -3000");
});