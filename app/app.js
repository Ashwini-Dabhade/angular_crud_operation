
var app = angular.module("bookApp", ["ngRoute"]);
    app.config(['$routeProvider',function($routeProvider) {
    $routeProvider
    .when("/booklist", {
        templateUrl : "features/booklist.html",
         controller : "BookCtrl"
       
    })
     .when("/addBook", {
         templateUrl : "features/addBook.html",
         controller : "AddCtrl"

     })
    

    .when("/editBook/:id", {
        templateUrl : "features/editBook.html",
        controller : "EditCtrl"

    });

    }]);


function Route1Controller($scope, $routeParams) {
    $scope.id = $routeParams.id;
}