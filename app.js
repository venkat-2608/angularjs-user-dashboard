var app = angular.module("registerApp", []);

app.controller("registerController", function($scope){

$scope.user = {};

$scope.submitForm = function(){

$scope.message = "Registration Successful! Welcome " + $scope.user.name;

};

});