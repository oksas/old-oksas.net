angular
	.module("PortfolioApp")
	.controller("ProjectController", ["$scope", "projects", "$routeParams", function($scope, projects, $routeParams) {
	projects.success(function(data) {
		$scope.project = data[$routeParams.name];
	});
}]);