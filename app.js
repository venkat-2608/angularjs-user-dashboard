var app = angular.module("registerApp", []);

app.controller("registerController", function($scope){

$scope.user = {};
$scope.message = "";

$scope.submitForm = function(){

if($scope.user.name && $scope.user.email){
    $scope.message = "Registration Successful! Welcome " + $scope.user.name;
} else {
    $scope.message = "Please fill all required fields";
}

};

});