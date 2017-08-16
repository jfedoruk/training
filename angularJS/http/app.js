// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter', '$http',
 function($scope, $filter, $http) {

   $scope.handle = '';
   $scope.lowercasehandle = function() {
     return $filter('lowercase')($scope.handle);
   };
   $scope.characters = 5;

   $http.get('http://www.wp.pl')
        .success(function (result) {
          console.log(result);
        })
        .error( function (data, status) {
          console.log(data);
        });

}]);
