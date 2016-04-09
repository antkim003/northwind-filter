var model = require('../server/app/api/models');
var expect = require('chai').expect;
var Product = require('../server/app/api/models').Product;
var Employee    = require('../server/app/api/models').Employee;

// testing the models here

describe('check models', function () {
  it('there are atleast a 100 fake products in there', function () {
    Product.find()
      .then(function(products){
        expect(products.length).to.be.above(100);
      });
  });

  it('there are atleast a 100 fake employees in there', function () {
    Employee.find()
    .then(function(employees) {
      expect(employees.length).to.be.above(100);
    });
  });
});


