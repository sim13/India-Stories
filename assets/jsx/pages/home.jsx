var React  = require('react/addons')
var Svg_up = require('../reusable-modules/svg_upload.jsx')
	
class Home extends React.Component{
	constructor() {
		super()
		document.title = "India-Stories"
	}

	render() {
		return (
			<div>
				<section className="splash-wrapper">
					<div className="splash-bg"></div>
					<div className="logo"></div>
				</section>
				<section className="about-us">
				 	<h2> OUR STORY </h2>
				</section>
			</div>
		)
	}
};

module.exports = Home
