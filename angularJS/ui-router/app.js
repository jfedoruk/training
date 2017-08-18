var myApp = angular.module('helloWorld', ['ui.router']);

myApp.config(function($stateProvider) {
  var helloState = {
    name: 'hello',
    url: '/hello',
    template: '<h3>hello world!</h3> ' +
              '<input type="text" ng-model="name" />',
    controller: 'mainController'
  }

  var aboutState = {
    name: 'about',
    url: '/about',
    template: '<h3>Its the UI-Router hello world app!</h3>' +
              '<input type="text" ng-model="name" />',
    controller: 'secondController'
  }

  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);
});

myApp.service("nameService", function() {
    var self = this;

    this.name = "John Doe";
    this.nameLenght = function () {
      return self.name.length;
    };
});

myApp.controller("mainController", ['$scope', '$log', 'nameService',
function($scope, $log, nameService) {
  //$scope.name = 'Main';
  $scope.name = nameService.name;

  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  });

  $log.log(nameService.name);
  $log.log(nameService.nameLenght());

}]);

myApp.controller("secondController", ['$scope', '$log', 'nameService',
function($scope, $log, nameService) {
  //$scope.name = 'Main';
  $scope.name = nameService.name;

  $scope.$watch('name', function() {
    nameService.name = $scope.name;
  });

  $log.log(nameService.name);
  $log.log(nameService.nameLenght());

}]);
