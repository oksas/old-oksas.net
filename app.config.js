angular
	.module("PortfolioApp")
	.config(router);

function router($routeProvider) {
	$routeProvider
	.when("/", {
		controller: "HomeController",
		templateUrl: "components/home/home.html"
	})
	.when("/projects/", {
		controller: "ProjectsController",
		templateUrl: "components/projects/projects.html"
	})
	.when("/projects/:name", {
		controller: "ProjectController",
		templateUrl: "components/projects/project.html"
	})
	.when("/contact/", {
		controller: "ContactController",
		templateUrl: "components/contact/contact.html"
	})
	.otherwise({
		redirectTo: "/"
	});
}
