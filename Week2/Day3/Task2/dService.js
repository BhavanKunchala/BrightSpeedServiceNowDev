app.service('demoservice', ['$http', function ($http) {
    var arr = []
     
    this.sendData = function(ele){
        arr.push(ele)
        console.log(arr);
    }

    this.getData = function(){
        return arr;
    }
},
]);


