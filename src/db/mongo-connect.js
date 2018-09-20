const { MongoClient, ObjectID } = require("mongodb");

let state = {
  db: null,
}

const connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err)
    state.db = db
    done()
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