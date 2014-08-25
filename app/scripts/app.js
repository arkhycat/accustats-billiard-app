'use strict';

/**
 * @ngdoc overview
 * @name accustatsBilliardAppApp
 * @description
 * # accustatsBilliardAppApp
 *
 * Main module of the application.
 */
angular
  .module('accustatsBilliardAppApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
