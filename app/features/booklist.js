angular.module('bookApp').controller('BookCtrl', function ($scope, dataService) {
    $scope.data = [];

    //$scope.da="ash";

    $scope.GetData = function () {
        dataService.Get().then(function (response) {
            $scope.data = response.data;
        });
    }


    $scope.GetData();

    $scope.delete = function (id) {
        // $scope.GetData();
        $scope.id = id;
        dataService.Delete($scope.id).then(function () {
            $scope.GetData();
        });
    }
});