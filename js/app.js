//Define an angular module for our app

angular.module('sampleApp', ['ngRoute']);
 
angular.module('sampleApp').config(function($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);  // Enable href routing without hashes
 
    $routeProvider.when('/', {
        templateUrl: 'templates/home.html'
    })
    .when('/about', {
        templateUrl: 'templates/about.html'
    })
    .when('/contact', {
    	templateUrl: 'templates/contact.html'
    });
});