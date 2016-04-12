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

var validFrontendRoutes = ['/', '/products', '/employees', '/products/:letter', '/employees/:letter'];
var indexPath = path.join(__dirname, '..', '..', 'public', 'index.html');
validFrontendRoutes.forEach(function (stateRoute) {
  app.get(stateRoute, function (req, res) {
    res.sendFile(indexPath);
  });
});

module.exports = app;