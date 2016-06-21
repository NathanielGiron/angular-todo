angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! this is the helloWorld controller function, in the mainctrl");
  }
});