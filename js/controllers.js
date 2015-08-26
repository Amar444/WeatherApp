angular.module('WeatherApp.controllers', [])

	.controller('weatherCtrl', [ '$scope','owm', function($scope, owm){
		var currentCity = 'Grootegast,NL';
		$scope.currentCity = currentCity;

		owm.current.name(currentCity).then(function(weather) {
			$scope.now = weather;
			console.log(weather);
		})

		owm.forecast5.name(currentCity).then(function(weather) {
			$scope.weather5 = weather;
			console.log(weather);
		});

		owm.forecast16.name(currentCity).then(function(weather) {
			$scope.weather16 = weather;
			console.log(weather);
		});
	} ])

;