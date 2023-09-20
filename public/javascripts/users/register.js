app.controller('RegisterController', function ($scope, ValidationService) {
    $scope.Init = function () {
        $scope.FullName = "";
        $scope.Email = "";
        $scope.Password = "";
        $scope.FullNameWarning = "";
        $scope.EmailWarning = "";
        $scope.PasswordWarning = "";
        $scope.IsDisable = false;

        $scope.ValidateEmail();
        $scope.ValidatePassword();
        $scope.ValidateFullname();
    }

    $scope.DisableSubmit = function () {
        $scope.IsDisable = ($scope.FullNameWarning || $scope.EmailWarning || $scope.PasswordWarning);
    }

    $scope.ValidateEmail = function () {
        $scope.EmailWarning = ValidationService.ValidateEmail($scope.Email);
        $scope.DisableSubmit();
    }

    $scope.ValidatePassword = function () {
        $scope.PasswordWarning = ValidationService.ValidatePassword($scope.Password);
        $scope.DisableSubmit();
    }

    $scope.ValidateFullname = function () {
        $scope.FullNameWarning = ValidationService.ValidateFullname($scope.FullName);
        $scope.DisableSubmit();
    }

    $scope.Register = function () {

    }
});