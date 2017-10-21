var React = require('react');
var ResultItem = require('ResultItem');

var Results = React.createClass({

	render: function() {
		var results = '';

		if (this.props.resultData) {
			results = this.props.resultData.map(function(result) {
				if (result.media_type == 'person') {
					console.log('this is a person');
				} else {
					if(!result.name) {
						var title = result.original_title;
					} else {
						var title = result.name;
					}

					var key = result.id;
					var genres = result.genre_ids;
					var rating = result.vote_average;
					var poster = 'http://image.tmdb.org/t/p/w500' + result.poster_path;

					return (
			            <ResultItem key={key} title={title} genres={genres} rating={rating} poster={poster} />
					);
				}
			});
		}

		return (
			<ul>
				{results}
			</ul>
		);
	}
});

module.exports = Results;