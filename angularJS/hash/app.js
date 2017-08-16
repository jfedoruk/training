//MODULE
var angularApp = angular.module('angularApp', ['ngRoute']);

angularApp.config(function ($routeProvider) {

  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  });


});

// CONTROLLERS
angularApp.controller('mainController', ['$scope', '$location', '$log',
 function($scope, $location, $log) {
   $log.info($location.path());
   $log.info("main");
   $scope.name = 'Main';

}]);

angularApp.controller('secondController', ['$scope', '$location', '$log', '$routeParams',
 function($scope, $location, $log, $routeParams) {

      $scope.num = $routeParams.num;

      $log.info("second");
      $scope.name = 'Second';

}]);
