var testApp = angular.module("testApp", ['ngMaterial']);


testApp.controller("paginaController", ["$scope", function($scope){

  $scope.naam="gil";
  
  $scope.number=100;
  
  $scope.getStyle = function () {
    return { color: "red"};
  };

  $scope.heyGil= function () {

    alert("hey gil");
  }

}]);

