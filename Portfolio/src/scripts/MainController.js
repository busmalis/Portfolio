var app = angular.module('portfolioApp', [ 'ngRoute' ]);

app.factory("JSONFactory", [ '$http', function($http) {

	var urlBase = '../PortfolioAPI/JSON/';
	var JSONFactory = {};

	JSONFactory.getGeneral = function() {
		return $http.get(urlBase + 'GetGeneral').success(function(data) {
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

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'partial/profile.html',
		controller : 'mainCtrl'
	}).when('/projects', {
		templateUrl : 'partial/projects.html',
		controller : 'projectCtrl'
	}).when('/projects/:projectId', {
		templateUrl : 'partial/projectDetails.html',
		controller : 'projectDetailsCtrl'
	}).otherwise({
	    redirectTo: '/'
	});

	// use the HTML5 History API
    $locationProvider.html5Mode(true);
}]);

app.controller('mainCtrl', [
		'$scope',
		'JSONFactory',
		function($scope, JSONFactory) {

			/*
			 * MAIN
			 * 
			 */

			getGeneral();

			function getGeneral() {

				$scope.name = "Name";
				$scope.descriptionShort = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				$scope.description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				$scope.linkedInName = "Name";
				$scope.gitHubName = "Name";
				
				$scope.experience = [{
					fromYear : 2005,
					toYear : 2007,
					companyName : "Mobile Inc.",
					location : "Washington",
					descriptionShort : "Epic mobile paradise",
					description : "Create some mobile apps"					
				},
				{
					fromYear : 2007,
					toYear : 2008,
					companyName : "Game Ltd.",
					location : "New York",
					descriptionShort : "Developing games",
					description : "Development of the greatest games"					
				},
				{
					fromYear : 2008,
					toYear : 2015,
					companyName : "Creative Corp.",
					location : "Philadelphia",
					descriptionShort : "CEO",
					description : "Owning the business"					
				}];
				
				$scope.education = [{
						fromYear : 2001,
						toYear : 2005,
						name : "MIT",
						location : "Cambridge",
						descriptionShort : "M.Sc Computer Engineering",
						description : "Major in Latin"					
				}];
				
//				JSONFactory.getGeneral().success(function(data) {
//					$scope.name = data.name;
//					$scope.descriptionShort = data.descriptionShort;
//					$scope.description = data.description;
//					$scope.experience = data.experiences;
//					$scope.education = data.educations;
//					$scope.linkedInName = data.linkedInName;
//					$scope.gitHubName = data.gitHubName;
//				}).error(
//						function(error) {
//							$scope.error = 'Unable to load General data: '
//									+ error.message;
//						});
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

app.controller('projectCtrl', [ '$scope', 'JSONFactory',
		function($scope, JSONFactory) {

			/*
			 * MAIN
			 * 
			 */
		
			getGeneral();

			function getGeneral() {
				$scope.projects = [
				{
					name : "App",
					location : "Android",
					description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					descriptionShort : "DescriptionShort",
					image : "projectAndroid",
					gitHubName: ""
				}];
				// JSONFactory.getProjects().success(function(data) {
				// $scope.projects = data.projects;
				// }).error(
				// function(error) {
				// $scope.error = 'Unable to load projects data: '
				// + error.message;
				// });
			}
			;

		} ]);

app.controller('projectDetailsCtrl', [
		'$scope',
		'JSONFactory',
		'$routeParams',
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
				$scope.projects = [ {
					name : "Portfolio",
					location : "AngularJS 1.4",
					description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					descriptionShort : "DescriptionShort",
					image : "projectAngularjs",
					gitHubName: "busmalis/Portfolio",
					stages : [{ name : 'Define', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Develop', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Release', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Evaluate', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
				]},{
					name : "List",
					location : "Android",
					description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
					descriptionShort : "DescriptionShort",
					image : "projectAndroid",
					stages : [{ name : 'Define', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Develop', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Release', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Evaluate', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
				]},{
						name : "Golf",
						location : "Android",
						description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
						descriptionShort : "DescriptionShort",
						image : "projectAndroid",
					stages : [{ name : 'Define', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Develop', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Release', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." },
					          { name : 'Evaluate', description : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." }
				]} ];
				$scope.project = $scope.getProjectByIndex(index);
			// JSONFactory.getProjects().success(function(data) {
					
					// $scope.projects = data.projects;
// $scope.project = $scope.getProjectByIndex(index);
// }).error(
// function(error) {
// $scope.error = 'Unable to load projects data: '
// + error.message;
// });
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
