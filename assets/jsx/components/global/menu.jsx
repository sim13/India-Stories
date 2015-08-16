import React 	from 'react/addons';
var Link  = require('react-router').Link

export class Menu extends React.Component {
	render() {
		return (
			<div className="menu-wrapper">
				<ul className="menu">
					<Link to="home"><li className="menu-item selected home">INDIA STORIES</li></Link>
					<Link to="leadership"><li className="menu-item leadership">Leadership</li></Link>
					<Link to="projects"><li className="menu-item projects">Projects</li></Link>
				</ul>
			</div>
		);
	}
}


module.exports = Menu
