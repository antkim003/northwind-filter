'use strict';

var app = require('express')();
var express = require('express');
var router  = express.Router();
var path    = require('path');

// static middle ware here
// public route
var root = path.join(__dirname,'..','..');
var publicPath = path.join(root, 'public');
app.use(express.static(publicPath));
app.use(express.static(path.join(root, 'node_modules', '/bootstrap/dist')));
app.use(express.static(root));

app.get('/', function(req, res, next) {
  var indexPath = path.join(__dirname, '..', '..','public','index.html')
  res.sendFile(indexPath);
});

app.use('/api', require('./api/api.router'));

app.get('/products', function(req, res, next) {
  res.send('products');
});

app.get('/employees', function(req, res, next) {
  res.send('employees');
});

module.exports = app;