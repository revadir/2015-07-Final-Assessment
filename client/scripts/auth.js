/**
 * Created by revadir on 8/18/15.
 */

var module = angular.module('giphy-app.auth', [])

.controller('AuthController', ['$scope', 'AuthFactory', function($scope, AuthFactory) {
    $scope.signIn = function() {
        // authenicate...
        var results = AuthFactory.authenticate($scope.userName, $scope.password);
        results.success(function(res) {
            console.log('successfully logged in');
        }, function(err) {
            console.log(err);
        });
    };
}]);
