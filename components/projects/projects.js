angular
	.module("PortfolioApp")
	.factory("projects", ["$http", function($http) {
	return $http.get("assets/json/projects.json")
		.success(function(data) {
			return data;
		})
		.error(function(data) {
			return data;
		})
}]);
