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
				<section className="our-philosophy">
					<h2> OUR PHILOSOPHY</h2>
					<div className="mini-section-1">
						<Svg_up svg="Brain" className="section-1"/>
						<div className="brain-text" className="section-1">
							<h2>Systemic Thinking</h2>
							<p className="section-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Personal-Mastery" className="section-1"/>
						<div className="brain-text" className="section-1">
							<h2>Personal Mastery</h2>
							<p className="section-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Leadership" className="section-1"/>
						<div className="brain-text" className="section-1">
							<h2>Leadership</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Compass" className="section-1"/>
						<div className="brain-text" className="section-1">
							<h2>Core Values</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam </p>
						</div>

					</div>
				</section>
			</div>
		)
	}
};

module.exports = Home
