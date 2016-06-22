angular.module("todoListApp", [])
.controller('mainCtrl', function($scope) {
  $scope.helloWorld = function() {
    console.log("Hello there! this is the helloWorld controller function, in the mainctrl");
  }

  $scope.todos = [
  	{"name": "clean the house"},
  	{"name": "water the lawn"},
  	{"name": "feed the dog"},
  	{"name": "pay dem bills"},
  	{"name": "run"},
  	{"name": "swim"}
  ]
});