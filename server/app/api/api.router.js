'use strict';

var router = require('express').Router();
var Product = require('./models').Product;
var Employee    = require('./models').Employee;

console.log('heres the product and user models working', Product, Employee);

router.get('/', function(req, res, next) {
  res.send('api route working');
});

module.exports = router;