var React = require('react');

var Nav = React.createClass({
	render: function() {
		return (
			<nav>
				<div id="logo">Netflix</div>
				<div id="account">
					<span className="notifications"></span>
					<span className="avatar"></span>
				</div>
			</nav>
		);
	}
});

module.exports = Nav;