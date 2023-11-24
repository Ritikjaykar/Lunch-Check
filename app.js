// Define Angular module
angular.module('LunchCheck', [])

// Define LunchCheckController
.controller('LunchCheckController', ['$scope', function ($scope) {
    $scope.checkLunch = function () {
        if (!$scope.lunchItems || $scope.lunchItems.trim() === "") {
            $scope.message = "Please enter data first";
        } else {
            var itemsArray = $scope.lunchItems.split(',');
            if (itemsArray.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        }
    };
}]);
