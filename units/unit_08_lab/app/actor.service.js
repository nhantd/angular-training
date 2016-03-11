myAppDep
  .factory('actorService', actorService)


function actorService($http, $q) {
	this.$inject = ['$http', '$q'];
	actor = {}
	return {
		getFilms: getFilms,
	};

	function getFilms () {
		return $q(function (resolve, reject){
			$http
				.get('./api/actors-harrison.json')
				.then(function(response){
					// <!-- console.log(response.data); -->
					actor = angular.copy(response.data)
					actor.name='Harrison FORD';
					resolve(actor);
				})
			})
	}
}
