const MOVIE_DB_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '87dfa1c669eea853da609d4968d294be'; //borrowing this for now
const ADDITIONAL_CONFIG = '&sort_by=popularity.desc&language=en-US&original_language=en';
const DEFAULT_REQUEST = `${MOVIE_DB_URL}discover/movie?${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;
const BASE_FILTER_REQUEST = `${MOVIE_DB_URL}discover/`;
var initialRequest = false;

var React = require('react');
var Nav = require('Nav');
var Hero = require('Hero');
var Results = require('Results');
var Filters = require('Filters');

var Main = React.createClass({
	getInitialState: function() {
		return {
			isLoading: false,
			searchTerm: '',
			type: 'movie',
			genres: [],
			duration: '',
			rating: '',
			certification: '',
			releaseDate: '',
			data: ''
		}
	},
	handleSearch: function(searchTerm) {
		if (searchTerm.length > 0) {
			this.setState({
				isLoading: true,
				searchTerm: searchTerm
			});
			initialRequest = false;
			var request = encodeURIComponent(searchTerm);
			var requestUrl = `${MOVIE_DB_URL}search/multi?query=${request}&api_key=${API_KEY}${ADDITIONAL_CONFIG}`;
			this.getResults(requestUrl);
		} else {
			this.setState({
				isLoading: true,
				searchTerm: searchTerm
			});
			this.getResults(DEFAULT_REQUEST);
		}
	},
	handleFilter: function(e, filter) {
		var {type, genres, duration, rating, certification, releaseDate} = this.state;
		initialRequest = false;

		if (filter === 'type') {
			var type = e.target.value;
			this.setState({
				isLoading: true,
				type: type
			});
		}

		if (filter === 'genre') {
			if (e.target.checked) {
				genres.push(e.target.value);
			} else {
				var index = genres.indexOf(e.target.value);
				genres.splice(index, 1);
			}

			this.setState({
				isLoading: true,
				genres: genres
			});
		}

		if (filter === 'duration') {
			var duration = e.target.value;

			if (duration != '') {
				if (duration >= 121) {
					var duration = '&with_runtime.gte=' + duration;
				} else {
					var duration = '&with_runtime.lte=' + duration;
				}
			}

			this.setState({
				isLoading: true,
				duration: duration
			});
		}

		if (filter === 'rating') {
			var rating = e.target.value;

			if (rating != '') {
				var rating = '&vote_average.gte=' + rating;
			}

			this.setState({
				isLoading: true,
				rating: rating
			});
		}

		if (filter === 'certification') {
			var certification = e.target.value;

			if (certification != '') {
				var certification = '&certification_country=US&certification=' + certification;
			}

			this.setState({
				isLoading: true,
				certification: certification
			});
		}

		if (filter === 'releaseDate') {
			var releaseDate = e.target.value;

			if (type == 'movie') {
				var gte = '&primary_release_date.gte=';
				var lte = '&primary_release_date.lte=';
			} else {
				var gte = '&first_air_date.gte=';
				var lte = '&first_air_date.lte=';
			}

			if (releaseDate != '') {
				if (releaseDate === '1950') {
					releaseDate = lte + parseInt(releaseDate);
				} else {
					releaseDate = e.target.value.split(',');
					releaseDate = gte + parseInt(releaseDate[0]) + lte + parseInt(releaseDate[1]);
				}
			}

			this.setState({
				isLoading: true,
				releaseDate: releaseDate
			});
		}

		if (genres.length > 0) {
			genres = '&with_genres=' + genres.join(',');
		} else {
			var genres = '';
		}

		var requestUrl = `${BASE_FILTER_REQUEST}${type}?${genres}${duration}${rating}${certification}${releaseDate}${ADDITIONAL_CONFIG}&api_key=${API_KEY}`;
		this.getResults(requestUrl);
	},
	getResults: function(requestUrl) {
		console.log('requestUrl: ' + requestUrl);

		fetch(requestUrl).then((response)=>{
	        return response.json();
	    }).then((data)=>{
	    	this.setState({
				data: data.results,
				isLoading: false
			});
	    }).catch((err)=>{
	        console.log("There has been an error:" + err);
	    });
	},
	render: function() {
		var {isLoading, searchTerm, data} = this.state;

		if (initialRequest == false && searchTerm.length === 0) {
			this.getResults(DEFAULT_REQUEST);
			initialRequest = true;
		}

		function displayHero() {
			console.log(initialRequest);
			if (initialRequest) {
				return <Hero/>;
			} else {
				return null;
			}
		}

		function displayResults() {
			if (!isLoading) {
				if (data.length > 0) {
					return <Results resultData={data}/>;
				} else {
					return <h3>No Results Found.</h3>;
				}
			}
		}

		return (
			<main>
				<Nav/>
				<section id="results">
					{displayHero()}
					<Filters onFilter={this.handleFilter} onSearch={this.handleSearch}/>
					{displayResults()}
				</section>
			</main>
		);
	}
});

module.exports = Main;