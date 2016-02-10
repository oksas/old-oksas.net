var contactMessages = ["ring ring",
						"inbox (1)",
						"reach out",
						"もしもし",
						"say hello",
						"hire me",
						"hey! listen!"
						];

angular
	.module("PortfolioApp")
	.controller("ContactController", ["$scope", "$routeParams", function($scope, $routeParams) {

	$scope.message = contactMessages[getRandomInt(0, contactMessages.length)];
}]);
