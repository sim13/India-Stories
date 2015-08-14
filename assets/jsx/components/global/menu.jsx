import React from 'react';

export class Menu extends React.Component {
	render() {
		return (
			<div className="menu-wrapper">
				<ul className="menu">
					<li className="menu-item">About</li>
					<li className="menu-item">Our Leadership</li>
					<li className="menu-item">Projects</li>
				</ul>

			</div>
		);
	}
}


module.exports = Menu
