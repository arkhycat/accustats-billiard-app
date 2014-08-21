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
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
