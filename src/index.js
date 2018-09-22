const _ = require("lodash");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const MongoUtil = require("./db/mongo-connect");

const app = express();
const port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.options("*", cors());
app.use(cors());
app.use(require("./routes/index"));

MongoUtil.connect('mongodb://admin:admin123@ds163842.mlab.com:63842/midterm', function(err) {
  if (err) {
    console.log('Unable to connect to Mongo.');
    process.exit(1)
  } else {

    
    app.listen(port, () => {
        console.log(`Started up at port ${port}`);
    });
  }
});

module.exports = { app };