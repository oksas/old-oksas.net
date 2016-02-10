var projectsMessages = ["my work",
						"my stuff",
						"things I've done"
						];

angular
	.module("PortfolioApp")
	.controller("ProjectsController", ["$scope", "projects", function($scope, projects) {
	projects.success(function(data) {
		$scope.projects = data;
	});
	$scope.message = projectsMessages[getRandomInt(0, projectsMessages.length)];
}]);