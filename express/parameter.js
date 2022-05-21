const express = require("express");
const app = express();

app.use('/static', express.static('public'));

app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
});

app.get('/user/:id/:age/:num?', (req,res)=>{
    console.log(req.params);
    res.send("user = " + req.params.id + " Age = " + req.params.age + " Number = " + req.params.num);
});

app.get('/users/:id/:from-:to', (req,res)=>{
    console.log(req.params);
    res.send("user = " + req.params.id + " From = " + req.params.from + " To = " + req.params.to);
});

app.get('/users/:id/:from?.:to?', (req,res)=>{
    console.log(req.params);
    res.send("user = " + req.params.id + " From = " + req.params.from + " To = " + req.params.to);
});

app.listen(3000, ()=>{
    console.log("Server Started -3000");
});