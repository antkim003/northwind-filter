'use strict';

var router = require('express').Router();
var Product = require('./models').Product;
var Employee    = require('./models').Employee;

console.log('heres the product and user models working', Product, Employee);

router.get('/', function(req, res, next) {
  res.send('api route working');
});

router.get('/employees/:letter', function(req, res, next) {
  var letter = req.params.letter;
  var re     = new RegExp('^' + letter,'i');
  Employee.find({
    name: { $regex: re }
  })
  .then(function(employees) {
    res.send(employees);
  });
});

router.get('/products/:letter', function(req, res, next) {
  var letter = req.params.letter;
  var re     = new RegExp('^' + letter,'i');
  Product.find({
    name: { $regex: re }
  })
  .then(function(products) {
    res.send(products);
  });
});

module.exports = router;