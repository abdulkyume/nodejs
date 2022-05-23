const express = require("express");
const app = express();

var mmw = require("./mymiddlewire"); // import middlewire

var Validation = function (req, res, next) {
  console.log("main Middleware working");
  next();
};

var usersValidation = function (req, res, next) {
  console.log("user Middleware working");
  next();
};

var userValidation = function (req, res, next) {
  if (req.params.id % 2 == 0) {
    console.log("Even");
  } else {
    console.log("odd");
  }
  next();
};

//app.use(Validation); //globally accessed by any routes

//imported middle wire use
app.use(mmw({ option1: "1", option2: "2" }));
//imported middle wire use

//for specific routes
app.get("/", Validation, (req, res) => {
  res.send("hello world");
});

app.get("/user/:id", userValidation, (req, res) => {
  //imported middle wire use
  app.use(mmw({ option1: "1", option2: "2" }));
  //imported middle wire use
  res.send("hello user");
});

app.get("/users", usersValidation, (req, res) => {
  res.send("hello user");
});
//for specific routes

app.listen(3000, () => console.log("Server Running at 3000"));
