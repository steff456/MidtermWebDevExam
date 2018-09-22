const express = require("express");

const MongoUtil = require("./../db/mongo-connect");
const {handleError, handleResponse} = require("./../utils/messages");

const app = express();

app.get('/rating', function(req, res) {
    let client = MongoUtil.get();
    let col = client.collection('Ratings');
    col.find().toArray().then((doc) => {
        let count = 0;
        for(let i=0; i< doc.length; i++){
            count += doc[i].rating;
        }
        handleResponse(res, 'OK!', {rating: count/doc.length});
        }, (err) => {
        console.log('Unable to fetch ratings', err);
        handleError(res, err);
        });
});

app.post('/rating',async function(req, res) {
    let client = MongoUtil.get();
    let col = client.collection('Ratings');
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