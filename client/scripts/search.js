/**
 * Created by revadir on 8/18/15.
 */

var module = angular.module('giphy-app.search', ['giphy-app.factory'])

.controller('SearchController', ['$scope', 'ImageFactory', function($scope, ImageFactory) {
    $scope.results = [];

    $scope.search = function() {
        var results = ImageFactory.getImages($scope.searchText);
        results.success(function(res) {
          $scope.results = res.data;
          console.log($scope.results);
            for (var i = 0; i < $scope.results.length; i++) {
                console.log($scope.results[i]);
            }
        }, function(err) {
            alert('Error', err);
        });
    };
}]);
