var app = angular.module('calculatorApp', ['ui.router']);



app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider){
		//$urlRouterProvider.otherwise('/');

		$stateProvider.state('display', {
        	url: '/display',
        	templateUrl: 'templates/display.html',
			controller: 'DisplayAttendance',
			resolve: {
				'subject': ['$http', function($http) {
					return $http.get('javascript/data.html')
				}]
			}
    	});	

    	$stateProvider.state('calculate', {
        	url: '/calculate',
        	templateUrl: 'templates/calculate.html',
        	controller: 'MainCtrl'
    	});
}]);

app.controller('MainCtrl', ['$scope', function ($scope){

		var addFn = function () {
			$scope.answer = eval($scope.firstNo) + eval($scope.secondNo);
		};

		$scope.$watch('firstNo', addFn);
		$scope.$watch('secondNo', addFn);
	}]
);

app.controller('DisplayAttendance', ['$scope', '$http', 'subject', function ($scope,$http, subject){
		$scope.predicate = 'name';
		$scope.reverse = false;
		$scope.subject = subject.data;
	}]
);