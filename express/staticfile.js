const express = require("express");
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
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