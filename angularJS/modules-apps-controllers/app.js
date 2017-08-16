// MODULE
var angularApp = angular.module('angularApp', ['ngMessages', 'ngResource']);

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$log', '$filter', '$timeout',
 function($scope, $log, $filter, $timeout) {
  console.log($scope);
  console.log($log);
  $log.log("Hello");
  $log.info("info");

  $scope.name = 'John';
  $scope.formattedname = $filter('uppercase')($scope.name);

  $log.info($scope.formattedname);
  $log.info($timeout);

  $timeout(function() {
    $scope.name = 'Everybody';
  }, 3000);

}]);

// angularApp.controller('mainController', function($scope, $log, $filter, $resource) {
//   console.log($scope);
//   console.log($log);
//   $log.log("Hello");
//   $log.info("info");
//
//   $scope.name = "John";
//   $scope.formattedname = $filter('uppercase')($scope.name);
//
//   $log.info($scope.formattedname);
//
//
// });


//  ['$scope', '$log', function ($scope, $log) {
//
//   console.log($scope);
//   console.log($log);
//
// }]);
