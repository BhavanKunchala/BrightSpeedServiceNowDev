
app.controller('serviceCtrl1', ['$scope','demoservice', function($scope, demoservice) {
    $scope.name="Bhavan";
    $scope.arrItem;
    $scope.sendData = function(ele){
        console.log(ele)
        demoservice.sendData(ele)
    }
    },
]);