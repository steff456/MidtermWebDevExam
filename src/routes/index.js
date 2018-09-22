const express = require("express");

const app = express();

app.use(require("./graph"));
app.use(require("./rating"));

module.exports = app;
