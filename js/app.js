var app = angular.module('myApp', []);

app.controller('WeatherController', [ '$http', function($http){
	var weather = this;
	weather.information = [];

	//paste the next line in key.js:
	//var key = '4P1 K3Y H3R3'
	var link = 'http://api.openweathermap.org/data/2.5/forecast/city?id=2755204&APPID=' + key;
	
	$http.get(link).success(function(data){
		weather.information = data;
	});
} ]);
