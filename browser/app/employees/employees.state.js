'use strict';

app.config(function($stateProvider) {
  $stateProvider.state('employees', {
    url: '/employees',
    templateUrl: '/browser/app/employees/employees.html',
    controller: 'EmployeesCtrl'
  })
});