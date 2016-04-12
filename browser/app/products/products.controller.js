app.controller('ProductsCtrl', function($rootScope, $scope, ProductFactory, results, validLetters) {
  $scope.link       = "productsLetter";
  $scope.lettersObj = validLetters;
  $scope.results    = results.data;
});

app.controller('ProductCtrl', function($rootScope, $scope, results, validLetters) {
  $scope.link       = "productsLetter";
  $scope.lettersObj = validLetters;
  $scope.results    = results.data;
});