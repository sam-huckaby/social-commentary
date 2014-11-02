(function () {
	var mainApp = angular.module('ProjectTimothy', ['ngRoute']);

	mainApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
		$locationProvider.html5Mode(true);

		$routeProvider
		.when('/', {
			templateUrl: 'app/templates/home.template.html',
			//controller: 'ChapterController'
		})
		.otherwise({redirectTo:'/'});
	}]);

})();
