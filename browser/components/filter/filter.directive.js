'use strict';

app.directive('filter', function($state, EmployeeFactory, ProductFactory) {
  return {
    restrict: 'E',
    scope: {
      letters: '=',
      link: '='
    },
    templateUrl: 'browser/components/filter/filter.html',
    link: function(scope, element, attr) {
      var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
      scope.alphabet = alphabet;

      scope.doesItExist = function(letters, letter) {
        console.log(letters);//see what this object is?
        //thats why you have js errors
        if (letters.indexOf(letter) >= 0) {
          return false;
        } else {
          return true;
        }
      }

      scope.goRoute = function(link, letter) {
        $state.go(link, {letter: letter});
      }
    }
  }
});
