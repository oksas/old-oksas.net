var homeMessages = ["welcome",
						"hello",
						"hi there!"
						];

angular
	.module("PortfolioApp")
	.controller("HomeController", ["$scope", function($scope) {
	
	$scope.message = homeMessages[getRandomInt(0, homeMessages.length)];
}]);