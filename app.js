var app = angular.module("registerApp", []);

app.controller("registerController", function ($scope) {

    $scope.user = {};
    $scope.message = "";

    $scope.submitForm = function (form) {

        if (form.$valid) {
            $scope.message = "Registration Successful! Welcome " + $scope.user.name;
        } else {
            $scope.message = "Please fix the errors before submitting";
        }

    };

});