// var app = angular.module('app', []);

app.controller('serviceCtrl2', ['$scope',"demoservice", function($scope, demoservice) {
    $scope.f="Aditya";
    $scope.getData = function(){
        $scope.data = demoservice.getData(); 
         console.log(demoservice.arr);
    }
    },
    
]);