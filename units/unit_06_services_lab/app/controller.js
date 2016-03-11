myAppDep
	.controller('FilmController', FilmController)


function FilmController( $scope, filmService, onefilmService) {
	filmService.getFilms()
		.then(function(actor){
			$scope.actor=actor
			console.log('asdsdasds',actor)
		});
  onefilmService.getFilms()
		.then(function(films){
			$scope.films=films
			console.log('films',films)
		})
}
