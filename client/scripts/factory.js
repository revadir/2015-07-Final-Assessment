/**
 * Created by revadir on 8/18/15.
 */

var module = angular.module('giphy-app.factory', [])

.factory('ImageFactory', ['$http', function($http) {

    var getImages = function(searchText) {
      // issue a request to the server
      return $http({
          url: '/search',
          method: 'GET',
          params: { searchText : searchText },
          success: function(resp) {
            alert('success', resp);
            return resp;
          },
          error: function(err) {
            console.log(err);
          }
      });
    };

    return {
        getImages: getImages
    };

}])

.factory('AuthFactory', ['$http', function($http) {

    var authenticate = function(userName, password) {
      return $http({
        url: '/signin',
        method: 'POST',
        data: { userName: userName, password: password },
        success: function(resp) {
          return resp;
        },
        error: function(error) {
          console.log(error);
        }
      })
    };

    return {
      authenticate: authenticate
    };

}]);