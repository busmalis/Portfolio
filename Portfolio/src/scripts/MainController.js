var app = angular.module('portfolioApp', []);

app.factory("attributeFactory",['$http', function($http){
	
	var urlBase = '';
    var attributeFactory = {};
    
    attributeFactory.getAttributes = function(){
    	return $http.get(urlBase + "GetAttributes")
    	.success(function(data){
    		attributeFactory = data.records;    		
    	}); 
    };
	
    return attributeFactory;
    
}]);

app
		.controller('mainCtrl', ['$scope', 'attributeFactory',
				function($scope, attributeFactory) {

					/*
					 * MAIN
					 * 
					 */
			
			getAttributes();

		    function getAttributes() {
		    	attributeFactory.getAttributes()
		            .success(function (attributes) {
		                $scope.attributes = attributes.records;
		            })
		            .error(function (error) {
		                $scope.attributes = 'Unable to load attribute data: ' + error.message;
		            });
		    };
			
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

					$scope.infosName = "";
					$scope.infosDescriptionShort = "";
					$scope.infosDescription = "";
					$scope.infosExperience = [];
					$scope.infosEducation = [];

					/*
					 * Common
					 * 
					 */
					$scope.showAttribute = 0;

					$scope.getShowAttribute = function() {
						return $scope.showAttribute;
					}

					$scope.setShowAttribute = function(value) {
						$scope.showAttribute = value;
					}

					$scope.getShowInfosShortDescription = function(object) {
						return object.show;
					}

					$scope.setShowInfosShortDescription = function(object) {
						if (object.show == 1) {
							object.show = 0;
						} else {
							object.show = 1;
						}
					}
}]);

app.controller('footerCtrl', function($scope) {

	$scope.Copyright = "(c)";
	$scope.Author = "Temp";
	$scope.Year = "2015";

	$scope.getCopyright = function() {
		return $scope.Copyright + " " + $scope.Year + " " + $scope.Author;
	}

});
