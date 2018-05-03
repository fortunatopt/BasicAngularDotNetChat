var app = angular.module("ChatApp", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "Application/Modules/Home/home.html", controller: "homeCtrl"
        })
        .when("/index", {
            templateUrl: "Application/Modules/Home/home.html", controller: "homeCtrl"
        })
        .when("/page1", {
            templateUrl: "Application/Modules/Page1/page1.html", controller: "page1Ctrl"
        });
});