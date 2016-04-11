'use strict';

app.config(function($stateProvider) {
  $stateProvider.state('products', {
    url: '/products',
    templateUrl: '/browser/app/products/products.html',
    controller: 'ProductsCtrl'
  });
});