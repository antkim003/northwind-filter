'use strict';

var router   = require('express').Router();
var Product  = require('./models').Product;
var Employee = require('./models').Employee;
var _        = require('lodash');

console.log('heres the product and user models working', Product, Employee);

router.get('/', function(req, res, next) {
  res.send('api route working');
});

router.get('/employees', function(req, res, next) {
  Employee.find({})
    .then(function(employees) {
      res.send(employees)
    });
});

router.get('/employees/list', function(req, res, next) {
  // send a list of objects with which letters have names in them back

  Employee.find().then(function(employees) {
    var names = employees.map(function(employee) {
      return employee.name;
    });
    res.send(filter(names));
  })

});

router.get('/products/list', function(req, res, next) {
  // send a list of objects with which letters have names in them back

  Product.find().then(function(products) {
    var names = products.map(function(product) {
      
      return product.name;
    });
    res.send(filter(names));
  })

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







function filter(names) {
  // takes the names and filters it by the first letter and aggregates it into a object key map
  console.log('names', names.length);
  var lettersMap = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var resultList = {};
  var firstLetters;
  // change to only first letter
  firstLetters = names.map(function(name) {
    return name[0];
  });
  firstLetters.sort();
  console.log(_.uniq(firstLetters));
  return _.uniq(firstLetters);
}

router.get('/products', function(req, res, next) {
  Employee.find({})
    .then(function(products) {
      res.send(products)
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