var React = require('react');
var GenreData = require('genreData');

var ResultItem = ({title, genres, rating, poster}) => {
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

	return (
		<li className="item animated zoomIn">
			<img src={poster}/>
			<div className="info">
				<div className="title animated quick fadeInUp">{title}</div>
				<div className="genres animated quick fadeInUp">{genreList}</div>
				<div className="rating animated quick fadeInUp">{rating} / 10</div>
			</div>
		</li>
	);
}

module.exports = ResultItem;