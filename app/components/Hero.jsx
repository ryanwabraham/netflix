var React = require('react');
var GenreData = require('genreData');

var Hero = React.createClass({
	render: function() {
		return (
			<section id="hero">
				<div className="hero__info">
					<div className="hero__info__wrapper">
						<h1 className="animated quick fadeInUp">The X Files</h1>
						<a href="#" className="button">Play</a>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Hero;