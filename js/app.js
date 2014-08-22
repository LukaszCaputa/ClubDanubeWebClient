'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers'
]).
config(['$routeProvider', '$httpProvider',function($routeProvider, $httpProvider) {
  $routeProvider.when('/main', {templateUrl: 'partials/main.html', controller: 'MainController'});
  $routeProvider.when('/about', {templateUrl: 'partials/about.html', controller: 'AboutController'});
  $routeProvider.otherwise({redirectTo: 'main'});

}]);
