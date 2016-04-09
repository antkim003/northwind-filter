'use strict';

var mongoose = require('mongoose');
var db       = require('../../../db');

var ProductSchema = new mongoose.Schema({
  name: String
});

var EmployeeSchema = new mongoose.Schema({
  name: String
});

var Product = db.model('Product', ProductSchema);
var Employee = db.model('Employee', EmployeeSchema);

module.exports = {
  Product: Product,
  Employee: Employee
};