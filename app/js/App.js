(function() {

  "use strict";

  var App = angular.module("App", [
    "App.controllers",
    "App.services",
    "App.directives",
    "App.filters",
    "ngRoute",
    "ngResource"
  ]);

  App.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
           templateUrl: 'view/home.html'
          
      })
      .when('/simple', {
           templateUrl: 'view/simple.html'
          
      })
      .when('/compound', {
           templateUrl: 'view/compound.html'
      })

      .when('/about', {
           templateUrl: 'view/about.html'
      })
      .otherwise({redirectTo : '/'});
  });

}());