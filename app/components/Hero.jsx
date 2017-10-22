var React = require('react');
var GenreData = require('genreData');

var Hero = React.createClass({
	render: function() {
		if (this.props.resultData) {
			var topResult = this.props.resultData[0];

			if (topResult.media_type != 'person') {
				var key = topResult.id;
				var title = topResult.title;
				var overview = topResult.overview;
				var genres = topResult.genre_ids;
				var rating = topResult.vote_average;
				var background = 'http://image.tmdb.org/t/p/original' + topResult.backdrop_path;

				var genreList = '';
				genres.forEach(function(genre, genreCount) {
					GenreData.genres.forEach(function(item, index) {
						if (genreCount < 3 && item.id === genre) {
							genreList += item.name + ', ';
						}
					});
				});
				//remove the last comma
				genreList = genreList.replace(/,\s*$/, "");
			}

			var backgroundStyle = {
				backgroundImage: 'url(' + background + ')',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'right center'
			};
		}

		return (
			<section id="hero" style={backgroundStyle}>
				<div className="hero__info">
					<div className="hero__info__wrapper">
						<h1 className="animated quick fadeInUp">{title}</h1>
						<p className="animated quick fadeInUp">{overview}</p>
						<p className="genres animated quick fadeInUp">{genreList}</p>
						<p className="rating animated quick fadeInUp">{rating} / 10</p>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Hero;