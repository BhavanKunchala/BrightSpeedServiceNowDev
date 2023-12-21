var app = angular.module("app", []);

app.controller("serviceCtrl", [
    "$scope",
    "demoservice",
    function ($scope, demoservice) {
        $scope.arr;
        var c = 0;

        $scope.getData = function () {
            $scope.arr = demoservice.getData();
        };

        $scope.sendData = function (ele) {
            demoservice.sendData(ele);
        };
    },
]);

