
var cardsApp = angular.module('cardsApp',['ngRoute'],function(){});

// configure our routes
cardsApp.config(function($routeProvider) {
    $routeProvider

        // route for the default page as page1
        .when('/', {
            templateUrl : 'views/page1.html',
            controller  : 'page1Controller'
        })
        // route for the page1 page
        .when('/page1', {
            templateUrl : 'views/page1.html',
            controller  : 'page1Controller'
        })
        // route for the page2 page
        .when('/page2', {
            templateUrl : 'views/page2.html',
            controller  : 'page2Controller'
        })
        ;
});
