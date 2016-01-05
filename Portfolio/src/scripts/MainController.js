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

				$scope.name = "Johan Remes";
				$scope.descriptionShort = "My name is Johan Remes, I'm a Programmer.";
				$scope.description = "We cannot solve our problems with the same thinking we used when we created them.";
				$scope.linkedInName = "johan-remes/60/a13/55";
				$scope.gitHubName = "Busmalis";
				
				$scope.experience = [{
					fromYear : 2011,
					toYear : 2015,
					companyName : "ABB AB",
					location : "",
					descriptionShort : "Systems Engineer",
					description : ""					
				},
				{
					fromYear : 2012,
					toYear : 2015,
					companyName : "ABB AB",
					location : "",
					descriptionShort : "Product Manager (GWT)",
					description : ""					
				}];
				
				$scope.education = [{
						fromYear : 2006,
						toYear : 2010,
						name : "Örebro Universitet",
						location : "",
						descriptionShort : "B.Sc Computer Engineering",
						description : ""					
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
					name : "Tr1List",
					location : "Android",
					description : "This is an online list-application that syncs between users. The user can add/edit/remove and even share custom lists with other users. The advantage of this app against other existing apps is the online synchronization of all lists",
					descriptionShort : "DescriptionShort",
					image : "projectAndroid",
					gitHubName: "busmalis/Tr1List"
				},
				{
					name : "Portfolio",
					location : "AngularJS",
					description : "Portfolio is a website displaying my experiences, educations and projects. The application is build with AngularJS framework and it uses a client-server communication with a .NET Web Service returning JSON results.",
					descriptionShort : "DescriptionShort",
					image : "projectAngularjs",
					gitHubName: "busmalis/Portfolio"
				},
				{
					name : "Tr1Golf",
					location : "Android",
					description : "Tr1Golf is an Android application for Frisbee golfers, the main use of the application is to keep track of your score during the golf round, also keep track of your teammates. During the golf round the application uses a service to upload the latest score.",
					descriptionShort : "DescriptionShort",
					image : "projectAndroid",
					gitHubName: "busmalis/Tr1Golf"
				},
				{
					name : "SimpleGame",
					location : "CraftyJS",
					description : "Very simple game, try to connect the red and blue boxes with WASD and Arrow Keys www.johanremes.se/SimpleGame",
					descriptionShort : "Very simple game",
					image : "SimpleGame",
					gitHubName: "busmalis/SimpleGame"
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
