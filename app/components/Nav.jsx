import React from 'react';

function Nav() {
	return (
		<nav>
			<div id="logo">Netflix</div>
			<div id="account">
				<span className="notifications"></span>
				<span className="avatar"></span>
			</div>
		</nav>
	);
};

module.exports = Nav;