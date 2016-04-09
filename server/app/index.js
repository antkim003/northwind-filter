'use strict';

var app = require('express')();


app.get('/', function(req, res, next) {
  res.send('hello');
});

app.use('/api', require('./api/api.router'));

app.get('/products', function(req, res, next) {
  res.send('products');
});

app.get('/employees', function(req, res, next) {
  res.send('employees');
});

module.exports = app;