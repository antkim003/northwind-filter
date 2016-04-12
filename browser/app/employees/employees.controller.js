app.controller('EmployeesCtrl', function($rootScope, $scope, results, validLetters) {
  $rootScope.link   = "employeesLetter";
  $scope.lettersObj = validLetters.data;
  $scope.results    = results.data;
});

app.controller('EmployeeCtrl', function($rootScope, $scope, results, validLetters) {
  $rootScope.link   = "employeesLetter";
  $scope.results    = results.data;
  $scope.lettersObj  = validLetters.data;
}); 