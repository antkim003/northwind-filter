'use strict';

app.config(function($stateProvider) {
  $stateProvider

  .state('products', {
    url: '/products',
    templateUrl: '/browser/app/products/products.html',
    controller: 'ProductsCtrl',
    resolve: {
      results: function(ProductFactory) {
        return ProductFactory.fetchAll();
      },
      validLetters: function(ProductFactory) {
        return ProductFactory.getLetters();
          
      }
    }
  })
  .state('productsLetter', {
    url: '/products/:letter',
    controller: 'ProductCtrl',
    templateUrl: '/browser/app/products/products.html',
    resolve: {
      results: function(ProductFactory, $stateParams) {
        return ProductFactory.byLetters($stateParams.letter);
      },
      validLetters: function(ProductFactory) {
        return ProductFactory.getLetters(); 
      }
    }
  })
});