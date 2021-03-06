'use strict';

/**
 * @ngdoc function
 * @name accustatsBilliardAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the accustatsBilliardAppApp
 */
var  accustatsBilliardApp = angular.module('accustatsBilliardAppApp');

  accustatsBilliardApp.factory('turns', [function (){
      var ret = [];
      return ret;
    }]);

  accustatsBilliardApp.controller('MainCtrl', ['$scope', '$window', 'turns', function ($scope, $window, turns) {

    $scope.windowHeight = $window.innerHeight;
    $scope.players = ["player1", "player2"];
    $scope.turnTypes = ["KICK", "MISS", "SAFETY"];
    $scope.turns = turns;
    var CreateTurn = function () {
      this.player = 0;
      this.turnType = 0;
      this.count = 0;
      this.setPlayer = function (index) {
          this.player = index;
      };

      this.setType = function (type) {
        this.turnType = type;
      };

    };

    $scope.turn = new CreateTurn();
    $scope.nextPlayer = function () {
      return ($scope.turn.player + 1) % $scope.players.length;  
    };

    $scope.setPlayer = function (index) {$scope.turn.setPlayer(index)};
    $scope.setType = function (index) {$scope.turn.setType(index)};

    $scope.getPlayer = function (index) {return $scope.turn.player};
    $scope.getType = function (index) {return $scope.turn.turnType};

    $scope.addTurn = function () {
      $scope.turns.push($scope.turn);
      var nextPlayer = $scope.nextPlayer();
      $scope.turn = new CreateTurn();
      $scope.turn.setPlayer(nextPlayer);
    };

    $scope.turnStyle = function (turn) {
      var backgroundColors = ['#cccccc', '#00cc00'];
      var style = {
        'background-color': backgroundColors[turn.player]
      };
      return style;
    };

    $scope.turnToText = function (turn) {
      return $scope.players[turn.player] + ' ' + $scope.turnTypes[turn.turnType] + ' ' + turn.count;
    }
  }]);

