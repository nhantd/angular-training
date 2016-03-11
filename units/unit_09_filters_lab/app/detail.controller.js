myAppDep
	// .controller('FilmController', FilmController)
.controller('DetailsController', DetailsController)

function DetailsController( actorService, filmService) {
	var self = this;
	self.title = 'Detail Page';

	function getAfilm(filmid){
		self.afilm=[self.films[filmid]]
	}

	actorService.getFilms()
		.then(function(actors){
			self.actors=actors
			console.log('asdsdasds',actors)
		});
  filmService.getFilms()
		.then(function(films){
			self.films=films
			console.log('films',films)
			getAfilm(1)

			console.log('self.afilm',self.afilm)
		})
}
