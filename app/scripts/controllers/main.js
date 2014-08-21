'use strict';

/**
 * @ngdoc function
 * @name accustatsBilliardAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accustatsBilliardAppApp
 */
angular.module('accustatsBilliardAppApp')
  .controller('MainCtrl', function ($scope, $window) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.windowHeight = $window.innerHeight;
    $scope.player1 = "player1";
    $scope.player2 = "player2";
    $scope.tabClicked = function () 
    {
    	
    };
  });
