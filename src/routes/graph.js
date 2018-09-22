const express = require("express");
const assert = require('assert');

const MongoUtil = require("./../db/mongo-connect");
const {handleError, handleResponse} = require("./../utils/messages");

const app = express();

app.get('/graphs', function(req, res) {
    let client = MongoUtil.get();
    let col = client.collection('Graphs');
    col.find().skip(col.count()-20).toArray().then((doc) => {
        console.log(JSON.stringify(doc, undefined, 2));
        handleResponse(res, 'OK!', doc);
        }, (err) => {
        console.log('Unable to fetch graphs', err);
        handleError(res, err);
        });
});

app.post('/graphs',async function(req, res) {
    let client = MongoUtil.get();
    let col = client.collection('Graphs');
    try{
        let r = await col.insertOne(req.body);
        assert.equal(1, r.insertedCount);
        handleResponse(res, 'OK!', req.body);
    }
    catch(err){
        console.log('An error ocurred inserting a record.', err);
        handleError(res, err);
    }
});

module.exports = app;
