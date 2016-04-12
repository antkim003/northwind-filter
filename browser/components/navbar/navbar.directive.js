'use strict';

app.directive('navbar', function ($state) {
  return {
    restrict: 'E',
    templateUrl: '/browser/components/navbar/navbar.html'
  }
});