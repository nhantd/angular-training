// angular
// 	.module('myAppDep',[])
// 	.factory('filmService', filmFactory)
// 	.factory('onefilmService', onefilmFactory);
//note we are creating a service with 'factory' recipe

// var myAppDep= angular.module('myAppDep',[])

// angular
// .module('myApp', ['myAppDep']);


angular
	.module('myApp', [
		'ngRoute',
		'myAppDep'
	])
	.config(['$routeProvider', function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'partials/main-page.html',
				controller: 'MainController'
			})
			.when('/details', {
				templateUrl: 'partials/details-page.html',
				controller: 'DetailsController',
				// we will use controllerAs
				// to make its properties available via detailsCtrl object
				controllerAs: 'detailsCtrl'
			})
			.when('/page/:pageId', {
				templateUrl: 'partials/param-page.html',
				controller: 'ParamPageController',
				controllerAs: 'paramPageCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	}]);
