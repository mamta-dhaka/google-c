var express = require("express");
var authRouter = require("./auth");
var contactRouter = require("./contact");

var app = express();

app.use("/auth/", authRouter);
app.use("/contacts/", contactRouter);

module.exports = app;