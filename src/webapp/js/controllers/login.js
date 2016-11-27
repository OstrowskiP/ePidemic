angular.module('app')
    .controller('loginCtrl',['$http', '$location', function ($http, $location) {
        var ctrl = this;

        ctrl.username = '';
        ctrl.pass = '';
        
        ctrl.login = function () {
            
            var json2send = {
                username: ctrl.username,
                password: ctrl.pass
            };

            console.log("test");
            
            $http({method: 'POST', url: '/api/auth/login', data: json2send}).success(function (data) {
                $location.path('/');
            })      
        }
        
    }]);