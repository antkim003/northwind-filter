'use strict';

app.directive('filter', function($state, EmployeeFactory, ProductFactory) {
  return {
    restrict: 'E',
    scope: {
      letters: '='
    },
    templateUrl: 'browser/components/filter/filter.html',
    link: function(scope, element, attr) {
      var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      scope.alphabet = alphabet;

      scope.doesItExist = function(letter) {
        if (attr.letters.indexOf(letter) > 0) {
          return true;
        } else {
          return false;
        }
      }

    }
  }
});