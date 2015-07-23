var app = angular.module('portfolioApp', [ 'ngRoute' ]);

app.factory("JSONFactory", [ '$http', function($http) {

	var urlBase = '../PortfolioAPI/JSON/';
	var JSONFactory = {};

	JSONFactory.getGeneral = function() {
		return $http.get(urlBase + "GetGeneral").success(function(data) {
			JSONFactory = data;
		});
	};

	JSONFactory.getProjects = function() {
		return $http.get(urlBase + "GetProjects").success(function(data) {
			JSONFactory = data;
		});
	};

	return JSONFactory;

} ]);

app.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'partial/profile.html',
		controller : 'mainCtrl'
	}).when('/profile', {
		templateUrl : 'partial/profile.html',
		controller : 'mainCtrl'
	}).when('/projects', {
		templateUrl : 'partial/projects.html',
		controller : 'projectCtrl'
	}).when('/projects/:projectId', {
		templateUrl : 'partial/projectDetails.html',
		controller : 'projectDetailsCtrl'
	});

});

app
		.controller(
				'mainCtrl',
				[
						'$scope',
						'JSONFactory',
						function($scope, JSONFactory) {

							/*
							 * MAIN
							 * 
							 */

							getGeneral();

							function getGeneral() {

								JSONFactory
										.getGeneral()
										.success(
												function(data) {
													$scope.name = data.name;
													$scope.descriptionShort = data.descriptionShort;
													$scope.description = data.description;
													$scope.experience = data.experiences;
													$scope.education = data.educations;
													$scope.linkedInName = data.linkedInName;
													$scope.gitHubName = data.gitHubName;
												})
										.error(
												function(error) {
													$scope.error = 'Unable to load General data: '
															+ error.message;
												});
							}
							;

							$scope.showMobileVersion = 0;

							$scope.getShowMobileVersion = function() {
								return $scope.showMobileVersion;
							}

							$scope.setShowMobileVersion = function(value) {
								$scope.showMobileVersion = value;
								if (value = 1) {
									$scope.setShowAttribute(0);
								} else {
									$scope.setShowAttribute(1);
								}
							}
						} ]);

app.controller('projectCtrl', [
		'$scope',
		'JSONFactory',
		function($scope, JSONFactory) {

			/*
			 * MAIN
			 * 
			 */

			getGeneral();

			function getGeneral() {
				JSONFactory.getProjects().success(function(data) {
					$scope.projects = data.projects;
				}).error(
						function(error) {
							$scope.error = 'Unable to load projects data: '
									+ error.message;
						});
			}
			;

		} ]);

app.controller('projectDetailsCtrl', [ '$scope', 'JSONFactory', '$routeParams',
		function($scope, JSONFactory, $routeParams) {

			/*
			 * MAIN
			 * 
			 */
			$scope.getProjectByIndex = function(index) {
				return $scope.projects[index];
			}

			var projectId = $routeParams.projectId;

			getGeneral(projectId);

			function getGeneral(index) {
				
				JSONFactory.getProjects().success(function(data) {
					$scope.projects = data.projects;
					$scope.project = $scope.getProjectByIndex(index);
				}).error(
						function(error) {
							$scope.error = 'Unable to load projects data: '
									+ error.message;
						});
			}
			;

		} ]);

app.directive('resize', function($window) {
	return function($scope) {
		$scope.initializeWindowSize = function() {
			$scope.windowHeight = $window.innerHeight;
			$scope.windowWidth = $window.innerWidth;
			if ($scope.windowWidth < 1000) {
				$scope.showMobileVersion = 0;
			} else {
				$scope.showMobileVersion = 1;
			}
		};

		$scope.initializeWindowSize();
		return angular.element($window).bind('resize', function() {
			$scope.initializeWindowSize();
			return $scope.$apply();
		});
	};
});
