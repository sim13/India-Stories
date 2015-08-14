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
				<section className="splash">
					<div className="splash-wrapper"></div>
				</section>
			</div>
		)
	}
};

module.exports = Home
