
angular.module('accustatsBilliardAppApp')
  .controller('GamesListCtrl', ['$scope', '$http', function ($scope, $http) {
  	$scope.newGame = {player1: '', player2: ''}
  	$scope.games = $http.get("/collections/test13");
  	$scope.addGame = function() {
  		$http.post("/collections/test13", $scope.newGame)
  	}
  }]);
