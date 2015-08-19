/**
 * Created by revadir on 8/18/15.
 */

var module = angular.module('giphy-app.factory', [])

.factory('ImageFactory', ['$http', function($http) {

    var getImages = function(searchText) {
      console.log('getting images...');
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

}]);