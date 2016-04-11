app.controller('EmployeesCtrl', function($rootScope, $scope) {
  ProductFactory.getLetters()
    .then(function(letters) {
      $scope.letters = letters;
    });

});