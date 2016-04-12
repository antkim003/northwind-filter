'use strict';

app.config(function($stateProvider) {
  $stateProvider
  .state('employees', {
    url: '/employees',
    templateUrl: '/browser/app/employees/employees.html',
    controller: 'EmployeesCtrl',
    resolve: {
      results: function(EmployeeFactory) {
        return EmployeeFactory.fetchAll();
      },
      validLetters: function(EmployeeFactory) {
        return EmployeeFactory.getLetters();
          
      }
    }
  })
  .state('employeesLetter', {
    url: '/employees/:letter',
    controller: 'EmployeeCtrl',
    templateUrl: '/browser/app/employees/employees.html',
    resolve: {
      results: function(EmployeeFactory, $stateParams) {
        return EmployeeFactory.byLetters($stateParams.letter);
      },
      validLetters: function(EmployeeFactory) {
        return EmployeeFactory.getLetters();
      }
    }
  })
});