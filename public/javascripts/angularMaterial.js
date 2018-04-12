angular.module('MyApp', ['ngMaterial'])

.controller('MyCtrl', function ($scope) {
  $scope.statuses = [
      {name: "One", description: "First Tooltip"},
      {name: "Two", description: "Second Tooltip"},
      {name: "Three", description: "Third Tooltip"},
    ];
 

});