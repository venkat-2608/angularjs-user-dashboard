var app = angular.module("registerApp", []);

app.controller("registerController", function ($scope) {

    $scope.user = {};
    $scope.submittedUser = null;
    $scope.message = "";

    $scope.submitForm = function (form) {

        if (form.$valid) {
            $scope.submittedUser = angular.copy($scope.user);
            $scope.message = "Registration Successful!";

            // Reset input fields
            $scope.user = {};
            form.$setPristine();
            form.$setUntouched();
        } else {
            $scope.message = "Please fix the errors before submitting";
        }

    };

    $scope.resetForm = function (form) {
        $scope.user = {};
        $scope.message = "";
        form.$setPristine();
        form.$setUntouched();
    };

});