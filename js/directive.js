angular.module('ReviewDirective',[]).directive('reviewTable', function() {
  return {
    restrict: 'EA', 
    templateUrl: 'templates/directives/review-table.html'
  };
});