const { MongoClient, ObjectID } = require("mongodb");

let state = {
  db: null,
}

const connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, client) {
    if (err) return done(err)

    state.db = client.db("TodoApp");
    // console.log("db", state.db.collection, err, url);
    done();
  })
}

const get = function() {
  return state.db
}

const close = function(done) {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}

module.exports = {
  connect,
  get,
  close
};