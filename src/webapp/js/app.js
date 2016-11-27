require("./vendor/angular.min.js");
require("./vendor/angular-route.min.js");

angular.module("app", ["ngRoute"]);

require("./controllers/login.js");



angular.module("app")
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/',{
            templateUrl: 'templates/main/index.html'
        })
            .when('/login',{
                templateUrl: 'templates/login/index.html',
                controller: 'loginCtrl',
                controllerAs: 'vm'
            })
    }]);
