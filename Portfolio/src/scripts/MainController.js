var app = angular.module('portfolioApp', []);

app.factory("JSONFactory", [ '$http', function($http) {

	var urlBase = '../PortfolioAPI/JSON/';
	var JSONFactory = {};

	JSONFactory.getGeneral = function() {
		return $http.get(urlBase + "GetGeneral").success(function(data) {
			JSONFactory = data;
		});
	};

	return JSONFactory;

} ]);

app.controller('mainCtrl', [ '$scope', 'JSONFactory',
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
				 $scope.infosName = data.name;
				 $scope.infosDescriptionShort = data.descriptionShort;
				 $scope.infosDescription = data.description;
				 $scope.infosExperience = data.experiences;
				 $scope.infosEducation = data.educations;
				 })
				 .error(
				 function(error) {
				 $scope.infosName = 'Unable to load attribute data: '
				 + error.message;
				 });
			}
			;

			$scope.Attribute = "";
			$scope.AttributeText = "";

			$scope.setAttribute = function(object) {
				$scope.Attribute = object.name;
				$scope.AttributeText = object.text;
				$scope.setShowAttribute(1);
			}

			$scope.getAttribute = function() {
				return $scope.Attribute;
			}

			$scope.getAttributeText = function() {
				return $scope.AttributeText;
			}

			$scope.setShowInfos = function() {
				$scope.setShowAttribute(0);
			}

			/*
			 * INFOS
			 * 
			 */

			/*
			 * Common
			 * 
			 */

			$scope.getShowInfosShortDescription = function(object) {
				return !object.show;
			}

			$scope.setShowInfosShortDescription = function(object) {
				if (object.show == 1) {
					object.show = 0;
				} else {
					object.show = 1;
				}
			}
		} ]);

app.controller('footerCtrl', function($scope) {

	$scope.Copyright = "(c)";
	$scope.Author = "Temp";
	$scope.Year = "2015";

	$scope.getCopyright = function() {
		return $scope.Copyright + " " + $scope.Year + " " + $scope.Author;
	}

});
