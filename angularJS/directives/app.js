// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$filter',
 function($scope, $filter) {

   $scope.handle = '';
   $scope.lowercasehandle = function() {
     return $filter('lowercase')($scope.handle);
   };

   $scope.$watch('handle', function(newValue, oldValue) {

     console.info('Changed!');
     console.log('Old: ' + oldValue);
     console.log('New: ' + newValue);
   });

   $scope.characters = 5;

   $scope. rules = [
     { rulename: "Must be 5 chars" },
     { rulename: "Must not be used elswhere" },
     { rulename: "Must be cool" }
   ];

   console.log($scope.rules);

   $scope.alertClick = function() {
     alert("Clicked");
   };

   $scope.name = "John";
}]);
