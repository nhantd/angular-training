// angular
// 	.module('myAppDep',[])
// 	.factory('filmService', filmFactory)
// 	.factory('onefilmService', onefilmFactory);
//note we are creating a service with 'factory' recipe

// var myAppDep= angular.module('myAppDep',[])

angular
.module('myApp', ['myAppDep']);
