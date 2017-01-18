angular.module("bookApp").controller('EditCtrl', function ($scope, dataService, $routeParams,$location) {
    $scope.x = {};
    $scope.id = $routeParams.id;

    $scope.GetData = function (id) {
        dataService.Getbyid($scope.id).then(function (response) {
            $scope.x = response.data;
        });
    }
    $scope.GetData();


    $scope.UpdateData = function (x) {
    $scope.data = x;
        //$scope.GetData();
        //alert("Data updated Successfully...!!!");
        
        dataService.Update($scope.data).then(function (data) {
            //x = $scope.data;
           // return x;
           // $scope.GetData();

            $location.path('/booklist');
        });
    }



});