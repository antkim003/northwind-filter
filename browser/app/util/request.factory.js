'use strict';

/*
 * $http.get('someurl', function(result){
 *    return result.data;//you forgot to do this
 * });
 */
app.factory('ProductFactory', function($http) {
  var productObj = {};

  productObj.fetchAll = function() {
    return $http.get('/api/products');
  };

  productObj.getLetters = function() {
    return $http.get('/api/products/list');
  };

  productObj.byLetters = function(letter) {
    return $http.get('/api/products/' + letter);
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

  employeeObj.byLetters = function(letter) {
    return $http.get('/api/employees/' + letter);
  };

  return employeeObj;
});
