myAppDep
  .factory('filmService', filmService)
  .filter('filterName', filterName);

function filmService($http, $q) {
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


  function filterName(){
    return function (films, paramName){
      var filtered = [];
      films.forEach(function(item){
          console.log(item, typeof(item))
        if (item.title.indexOf(paramName) > -1){
          filtered.push(item);
        }
      });
      return filtered;
    }
  }
