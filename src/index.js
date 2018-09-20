const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ObjectID } = require("mongodb");

var { Todo } = require("./models/todo");
var { User } = require("./models/user");

var app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
