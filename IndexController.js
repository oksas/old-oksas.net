// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

angular
	.module("PortfolioApp")
	.controller("IndexController", ["$scope", "$location", function($scope, $location) {
	//$scope.currentPath = $location.absUrl();
	$scope.$on("$locationChangeSuccess", function() {
		$scope.path = $location.path();      
	});
}]);
