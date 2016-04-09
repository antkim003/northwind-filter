// db connections here...

'use strict';

var mongoose = require('mongoose');
var Promise = require('bluebird');
Promise.promisifyAll(mongoose);

var dbURI = 'mongodb://localhost:27017/northwindfilter';

var db = mongoose.connect(dbURI).connection;

db.on('open', function() {
  console.log('Database connection opened!');
});

db.on('error', function(err) {
  console.error('Database connection error: ', err);

});

module.exports = db;