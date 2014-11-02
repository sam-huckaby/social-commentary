(function () {
	var app = angular.module('ProjectTimothy');

	app.controller("timothy.ctrl.search", ['$scope', '$http', function($scope, $http){
		$scope.url = "http://bible.my-prototype.com/api/v1/readverse";

		$scope.search = function() {
			$http.post($scope.url, { "query" : $scope.keywords, "version": "eng-ESV"}).
			success(function(data, status) {
				$scope.status = status;
				$scope.data = data;
				$scope.result = data; // Show result from server in our <pre></pre> element
			})
			.
			error(function(data, status) {
				$scope.data = data || "Request failed";
				$scope.status = status;			
			});
		};
	}]);

})();
