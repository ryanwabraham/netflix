var React = require('react');

var Filters = React.createClass({
	handleType: function(e) {
		this.props.onFilter(e, 'type');
	},
	handleGenre: function(e) {
		this.props.onFilter(e, 'genre');
	},
	handleDuration: function(e) {
		this.props.onFilter(e, 'duration');
	},
	handleRating: function(e) {
		this.props.onFilter(e, 'rating');
	},
	handleCertification: function(e) {
		this.props.onFilter(e, 'certification');
	},
	handleReleaseDate: function(e) {
		this.props.onFilter(e, 'releaseDate');
	},
	render: function() {
		return (
			<aside>
				<h2>Filters</h2>

				<section>
					<form onChange={this.handleType}>
						<h3>Type</h3>
						<label htmlFor="type--any">
							<input type="radio" id="type--any" name="type" value=""></input>
							Any
					    </label>

					    <label htmlFor="type--movie">
							<input type="radio" id="type--movie" name="type" value="movie"></input>
							Movie
					    </label>

					    <label htmlFor="type--tv">
							<input type="radio" id="type--tv" name="type" value="tv"></input>
							TV
					    </label>
					</form>
				</section>

				<section>
					<form>
						<h3>Genre</h3>
						<label htmlFor="genre--action">
							<input type="checkbox" id="genre--action" name="genre" value="28" onChange={this.handleGenre}></input>
							Action
					    </label>

					    <label htmlFor="genre--adventure">
							<input type="checkbox" id="genre--adventure" name="genre" value="12" onChange={this.handleGenre}></input>
							Adventure
					    </label>

					    <label htmlFor="genre--animation">
							<input type="checkbox" id="genre--animation" name="genre" value="16" onChange={this.handleGenre}></input>
							Animation
					    </label>

					    <label htmlFor="genre--comedy">
							<input type="checkbox" id="genre--comedy" name="genre" value="35" onChange={this.handleGenre}></input>
							Comedy
					    </label>

					    <label htmlFor="genre--crime">
							<input type="checkbox" id="genre--crime" name="genre" value="80" onChange={this.handleGenre}></input>
							Crime
					    </label>

					    <label htmlFor="genre--documentary">
							<input type="checkbox" id="genre--documentary" name="genre" value="99" onChange={this.handleGenre}></input>
							Documentary
					    </label>

					    <label htmlFor="genre--drama">
							<input type="checkbox" id="genre--drama" name="genre" value="18" onChange={this.handleGenre}></input>
							Drama
					    </label>

					    <label htmlFor="genre--family">
							<input type="checkbox" id="genre--family" name="genre" value="10751" onChange={this.handleGenre}></input>
							Family
					    </label>

					    <label htmlFor="genre--fantasy">
							<input type="checkbox" id="genre--fantasy" name="genre" value="14" onChange={this.handleGenre}></input>
							Fantasy
					    </label>

					    <label htmlFor="genre--history">
							<input type="checkbox" id="genre--history" name="genre" value="36" onChange={this.handleGenre}></input>
							History
					    </label>

						<label htmlFor="genre--horror">
							<input type="checkbox" id="genre--horror" name="genre" value="27" onChange={this.handleGenre}></input>
							Horror
					    </label>

					    <label htmlFor="genre--musical">
							<input type="checkbox" id="genre--musical" name="genre" value="10402" onChange={this.handleGenre}></input>
							Musical
					    </label>

					    <label htmlFor="genre--mystery">
							<input type="checkbox" id="genre--mystery" name="genre" value="9648" onChange={this.handleGenre}></input>
							Mystery
					    </label>

					    <label htmlFor="genre--romance">
							<input type="checkbox" id="genre--romance" name="genre" value="10749" onChange={this.handleGenre}></input>
							Romance
					    </label>

					    <label htmlFor="genre--sci-fi">
							<input type="checkbox" id="genre--sci-fi" name="genre" value="878" onChange={this.handleGenre}></input>
							Science Fiction
					    </label>

					    <label htmlFor="genre--thriller">
							<input type="checkbox" id="genre--thriller" name="genre" value="53" onChange={this.handleGenre}></input>
							Thriller
					    </label>

					    <label htmlFor="genre--war">
							<input type="checkbox" id="genre--war" name="genre" value="10752" onChange={this.handleGenre}></input>
							War
					    </label>

					    <label htmlFor="genre--western">
							<input type="checkbox" id="genre--western" name="genre" value="37" onChange={this.handleGenre}></input>
							Western
					    </label>
				    </form>
				</section>

				<section>
					<form onChange={this.handleDuration}>
						<h3>Duration</h3>
						<label htmlFor="duration--any">
							<input type="radio" id="duration--any" name="duration" value=""></input>
							Any Duration
					    </label>

					    <label htmlFor="duration--half-hour">
							<input type="radio" id="duration--half-hour" name="duration" value="30"></input>
							Half-Hour or Less
					    </label>

					    <label htmlFor="duration--one-hour">
							<input type="radio" id="duration--one-hour" name="duration" value="60"></input>
							One Hour or Less
					    </label>

					    <label htmlFor="duration--two-hours">
							<input type="radio" id="duration--two-hours" name="duration" value="120"></input>
							Two Hours or Less
					    </label>

					    <label htmlFor="duration--two-plus-hours">
							<input type="radio" id="duration--two-plus-hours" name="duration" value="121"></input>
							2+ Hours
					    </label>
				    </form>
				</section>

				<section>
					<form onChange={this.handleRating}>
						<h3>User Rating</h3>
						<label htmlFor="rating--any">
							<input type="radio" id="duration--any" name="rating" value=""></input>
							Any Rating
					    </label>

					    <label htmlFor="rating--two-stars">
							<input type="radio" id="rating--two-stars" name="rating" value="2"></input>
							2/10 +
					    </label>

					    <label htmlFor="rating--four-stars">
							<input type="radio" id="rating--four-stars" name="rating" value="4"></input>
							4/10 +
					    </label>

					    <label htmlFor="rating--six-stars">
							<input type="radio" id="rating--six-stars" name="rating" value="6"></input>
							6/10 +
					    </label>

					    <label htmlFor="rating--eight-stars">
							<input type="radio" id="rating--eight-stars" name="rating" value="8"></input>
							8/10 +
					    </label>
				    </form>
				</section>

				<section>
					<form onChange={this.handleCertification}>
						<h3>Official Rating</h3>
						<label htmlFor="certification--any">
							<input type="radio" id="certification--any" name="certification" value=""></input>
							Any
					    </label>
						<label htmlFor="certification--g">
							<input type="radio" id="certification--g" name="certification" value="G"></input>
							G
					    </label>

					    <label htmlFor="certification--pg">
							<input type="radio" id="certification--pg" name="certification" value="PG"></input>
							PG
					    </label>

					    <label htmlFor="certification--pg-13">
							<input type="radio" id="certification--pg-13" name="certification" value="PG-13"></input>
							PG-13
					    </label>

					    <label htmlFor="certification--r">
							<input type="radio" id="certification--r" name="certification" value="R"></input>
							R
					    </label>
				    </form>
				</section>

				<section>
					<form onChange={this.handleReleaseDate}>
						<h3>Release Date</h3>
						<label htmlFor="release-date--any">
							<input type="radio" id="release-date--any" name="release-date" value=""></input>
							Any
					    </label>
					    <label htmlFor="release-date--1950">
							<input type="radio" id="release-date--1950" name="release-date" value="1950"></input>
							Before 1950
					    </label>
						<label htmlFor="release-date--1960">
							<input type="radio" id="release-date--1960" name="release-date" value="1960,1970"></input>
							1960s
					    </label>
						<label htmlFor="release-date--1970">
							<input type="radio" id="release-date--1970" name="release-date" value="1970,1980"></input>
							1970s
					    </label>
						<label htmlFor="release-date--1980">
							<input type="radio" id="release-date--1980" name="release-date" value="1980,1990"></input>
							1980s
					    </label>

					    <label htmlFor="release-date--1990">
							<input type="radio" id="release-date--1990" name="release-date" value="1990,2000"></input>
							1990s
					    </label>

					    <label htmlFor="release-date--2000">
							<input type="radio" id="release-date--2000" name="release-date" value="2000,2010"></input>
							2000s
					    </label>

					    <label htmlFor="release-date--2010">
							<input type="radio" id="release-date--2010" name="release-date" value="2010,2020"></input>
							2010 - Present
					    </label>
				    </form>
				</section>
			</aside>
		)
	}
});

module.exports = Filters;