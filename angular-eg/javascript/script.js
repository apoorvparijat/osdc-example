var app = angular.module('calculatorApp', ['ui.router']);



app.config(['$httpProvider', '$stateProvider', '$urlRouterProvider', function($httpProvider, $stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
        	url: '/',
        	templateUrl: 'templates/home.html'
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