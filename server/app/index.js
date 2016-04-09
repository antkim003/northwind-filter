'use strict';

var app = require('express')();


app.get('/', function(req, res, next) {
  res.send('hello');
});

app.use('/api', require('./api/api.router'));

module.exports = app;