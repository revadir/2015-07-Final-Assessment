/**
 * Created by revadir on 8/18/15.
 */

var module = angular.module('giphy-app.search', [])

.controller('SearchController', ['$scope', function($scope) {
  $scope.results = ['hello', 'ok'];
}]);
