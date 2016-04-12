app.directive('resultsTemplate', function() {
  return {
    restrict: 'E',
    scope: {
      results: '='
    },
    templateUrl: '/browser/components/results/results.html'
  };
});