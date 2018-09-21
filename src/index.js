const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const MongoUtil = require("./db/mongo-connect");
//const {ObjectID} = require("mongodb");

//let { Todo } = require("./models/todo");
//let { User } = require("./models/user");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());

MongoUtil.connect('mongodb://localhost:27017', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    console.log(err);
    process.exit(1)
  } else {

    
    app.listen(port, () => {
        console.log(`Started up at port ${port}`);
    });
  }
});

app.get('/all', function(req, res) {
    let client = MongoUtil.get();
    console.log('****', client.collection);
    let col = client.collection('Todos');
    col.find().count().then((count) => {
        console.log(`Todos count: ${count}`);
        }, (err) => {
        console.log('Unable to fetch the todos', err);
        });
})


module.exports = { app };