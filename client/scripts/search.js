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
        }, function(err) {
            alert('Error', err);
        });
        // clear the search field
        $scope.searchText = '';
    };
}]);
