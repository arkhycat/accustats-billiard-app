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

    $scope.windowHeight = $window.innerHeight;
    $scope.players = ["player1", "player2"];
    $scope.turnTypes = ["KICK", "MISS", "SAFETY"];
    $scope.turns = [];
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
  });
