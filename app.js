var app = angular.module("registerApp", []);

app.controller("registerController", function ($scope) {

    $scope.user = {};
    $scope.submittedUser = null;
    $scope.message = "";

    $scope.submitForm = function (form) {

        if (form.$valid) {
            $scope.submittedUser = angular.copy($scope.user);
            $scope.message = "User successfully registered and saved!";

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


app.directive("userCard", function () {
    return {
        restrict: "E",
        scope: {
            user: "="
        },
        template: `
            <div class="submitted">
                <h3>Last Submitted User</h3>
                <p><b>Name:</b> {{user.name}}</p>
                <p><b>Email:</b> {{user.email}}</p>
            </div>
        `
    };
});