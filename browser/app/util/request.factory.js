'use strict';

app.factory('ProductFactory', function($http) {
  var productObj = {};

  productObj.fetchAll = function() {
    return $http.get('/api/products');
  };

  productObj.getLetters = function() {
    return $http.get('/api/products/list')
  };

  return productObj;
});

app.factory('EmployeeFactory', function($http) {
  var employeeObj = {};

  employeeObj.fetchAll = function() {
    return $http.get('/api/employees');
  };

  employeeObj.getLetters = function() {
    return $http.get('/api/employees/list')
  };

  return employeeObj;
});