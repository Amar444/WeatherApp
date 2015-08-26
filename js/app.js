angular.module('WeatherApp', ['WeatherApp.controllers','ngOpenWeatherMap'])

	.config(['owmProvider', function(owmProvider) {
	    owmProvider
	        .setApiKey('f8f22a684bfaeb15657fe944e81c45a8')
	        .useMetric()
	        .setLanguage('nl');
	}])


;