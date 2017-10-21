var React = require('react');

var Nav = React.createClass({
	handleChange: function(e) {
		e.preventDefault();
		var searchTerm = this.refs.searchInput.value;
		this.props.onSearch(searchTerm);
	},
	render: function() {
		return (
			<nav>
				<img id="logo" src="http://ryanabraham.net/netflix/img/logo.svg" alt="Netflix"/>
				<form onChange={this.handleChange}>
					<input ref="searchInput" type="search" placeholder="Search Titles, Actors" autofocus></input>
				</form>
			</nav>
		);
	}
});

module.exports = Nav;