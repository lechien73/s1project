angular.module('ReviewDirective',[]).directive('reviewTable', function() {
  return {
    restrict: 'EA',    // EA -> element/attribute
    templateUrl: 'templates/directives/review-table.html'
  };
});