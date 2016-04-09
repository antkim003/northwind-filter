'use strict';

var Promise  = require('bluebird');
var db       = require('./server/db');
var faker    = require('faker');

var Product  = require('./server/app/api/models').Product;
var Employee = require('./server/app/api/models').Employee;

// make a 100 products
// make a 100 employees
function generateAll() {
  var times = 100;
  var queue = []
  for (var i = 0; i < 100; i++) {
    queue.push(randomProduct());
    queue.push(randomEmployee());
  }

  console.log('all employees pushed into queue', queue);
  return queue;
}
function randomProduct() {
  return new Product({
    name: faker.name.findName()
  });
}
function randomEmployee() {
  return new Employee({
    name: faker.name.findName()
  });
}

// just one field to fill
function seed() {
  var docs = generateAll();
  return Promise.map(docs, function(doc) {
    return doc.save();
  });
}

// clear data base first, then we can start again

db.drop = Promise.promisify(db.db.dropDatabase.bind(db.db));

// and then we can use it as a promise...

db.on('open', function() {
  db.drop()
    .then(function() {
      return seed();
    })
    .then(function() {
      console.log('Seeding successful')
    }, console.error)
    .then(function() {
      process.exit();
    });
});