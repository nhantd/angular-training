myAppDep
  .factory('actorService', actorService)
  .filter('convertHigh', convertHigh);

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
					actors = angular.copy(response.data)
					// actor.name='Harrison FORD';
					resolve(actors);
				})
			})
	}
}
function convertHigh() {
  return function(height, param){
    if (param =='inch'){
      return 0.393701*height;
    }
    else if (param =='foot'){
      return 0.0328084*height;
    }
    else{
      return height;
    }
  }
}
