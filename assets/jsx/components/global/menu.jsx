import React from 'react';

export class Menu extends React.Component {
	render() {
		return (
			<div className="menu-wrapper">
				<ul className="menu">
					<li className="menu-item selected home">INDIA STORIES</li>
					<li className="menu-item leadership">Leadership</li>
					<li className="menu-item projects">Projects</li>
				</ul>

			</div>
		);
	}
}


module.exports = Menu
