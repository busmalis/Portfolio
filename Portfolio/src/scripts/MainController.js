var app = angular.module('portfolioApp', []);
app
		.controller(
				'mainCtrl',
				function($scope) {
					
					$scope.attributes = [ {
						name : 'Android',
						text : 'blablablaAndroid'
					}, {
						name : 'Java',
						text : 'blablablaJava'
					}, {
						name : 'AngularJS',
						text : 'blablablaAngularJS'
					}, {
						name : '.NET',
						text : 'blablabla.NET'
					} ];
					$scope.Attribute = "Android";
					$scope.AttributeText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
				
					$scope.setAttribute = function(object){
						$scope.Attribute = object.name;
						$scope.AttributeText = object.text;
					}
				
					$scope.getAttribute = function(){
						return $scope.Attribute;
					}
				
					$scope.getAttributeText = function(){
						return $scope.AttributeText;
					}
				
				});

app
.controller(
		'footerCtrl',
		function($scope) {
			
			$scope.Copyright = "(c)"
			$scope.Author = "Johan Remes"
			$scope.Year = "2015";
			
			$scope.getCopyright = function(){
				return $scope.Copyright + " " + $scope.Year + " " + $scope.Author;
			}
		
		});