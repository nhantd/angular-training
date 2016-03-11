myAppDep
  .factory('onefilmService', onefilmFactory);


function onefilmFactory($http, $q) {
	this.$inject = ['$http', '$q'];
	films = {}
	return {
		getFilms: getFilms,
	};


	function getFilms () {
		return $q(function (resolve, reject){
			$http
				.get('./api/films.json')
				.then(function(response){
					// <!-- console.log(response.data); -->
					films = angular.copy(response.data)
					resolve(films);
				})
			})
	}
}
