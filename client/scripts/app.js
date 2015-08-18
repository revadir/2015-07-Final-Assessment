/**
 * Created by revadir on 8/18/15.
 */
console.log('coming here');

var module = angular.module('giphy-app', [
    'giphy-app.auth',
    'ngRoute'
])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
  $routeProvider
    .when('/login', {
      templateUrl: '/login.html',
      controller: 'AuthController'
    })
    .when('/search', {
      templateUrl: '/search.html',
      controller: 'SearchController'
    })
    .otherwise({
      redirectTo: '/login'
    });
}]);