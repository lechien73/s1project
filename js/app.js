angular.module('reviewsApp', ['ngRoute', 'RouteControllers', 'UserService', 'angular-storage', 'ReviewDirective']);

angular.module('reviewsApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);
    
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html',
        controller: 'HomeController'
    })
    .when('/accounts/register', {
        templateUrl: 'templates/register.html',
        controller: 'RegisterController'
    })
    .when('/accounts/login', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/accounts/logout', {
        templateUrl: 'templates/logout.html',
        controller: 'LogoutController'
    })
    .when('/review', {
        templateUrl: 'templates/review.html',
        controller: 'ReviewController'
    });
});
