app.controller('RegisterController', ['$scope', 'ValidationService', function ($scope, ValidationService) {
    $scope.Init = function () {
        $scope.FullName = "";
        $scope.Email = "";
        $scope.Password = "";
        $scope.FullNameWarning = "";
        $scope.EmailWarning = "";
    }

    $scope.ValidateEmail = function () {
        $scope.EmailWarning = ValidationService.ValidateEmail($scope.Email);
    }

    $scope.Register = function () {
        $scope.FullNameWarning = "Cảnh báo nè";
    }
}]);