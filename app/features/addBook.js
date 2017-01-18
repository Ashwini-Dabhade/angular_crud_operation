angular.module("bookApp").controller('AddCtrl', function ($scope, dataService,$location) {
    $scope.add = {};
    $scope.add.favorite = false;
    //$scope.showMe=false; 
    $scope.AddData = function () {

        //$scope.showMe; 
        //alert("Data Added Successfully...!!!");
        
        dataService.Post($scope.add).then(function () {             //  window.location = "#/booklist.html";

               $location.path('/booklist');
       
          
        });
        
        /*

        if($scope.add.favorite == false)
        {
           
        }
        else
        {

        }
        */

    }
});