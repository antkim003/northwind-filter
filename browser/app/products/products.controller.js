app.controller('ProductsCtrl', function($rootScope, $scope, ProductFactory) {
  ProductFactory.getLetters()
    .then(function(letters) {
      $scope.lettersObj = letters;
      
    });

});