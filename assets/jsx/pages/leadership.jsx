var React  = require('react/addons')
var Svg_up = require('../reusable-modules/svg_upload.jsx')
	
export class Leadership extends React.Component{
	constructor() {
		super()
		document.title = "IndiaStories | Leadership"
	}

	render() {
		return (
			<div>
				<section className="leadership">
				<div className="image-wrapper">
					<div className="image"></div>
				</div>
					<h1> LEADERSHIP </h1>
					<article className="team-members">
						<div className="member-1 member">
							<h2>K.R. Harish</h2>
							<p>A start up specialist with experience of more than 20 years in media industry spanning  Satellite Television, Satellite Radio, Music Record Label and Motion Pictures.
Past assignments included Dy.CFO of Star TV, Managing Director and CFO Asia Pacific World Space, Group CFO Data Access, Managing Director Phat Phish India Pvt Limited and Producer at Lightforms and Pictures Pvt Ltd</p>
						</div>
						<div className="member-2 member">
							<h2> Trilok Malhotra</h2>
							<p>An industry veteran having spent over 28 years in the industry covering the entire life cycle of film production management, starting from validation of scripting, budgeting, production, marketing and distribution of films. Has managed shoots in various locations of India, and overseas.Was until recently the Head of Production of Fox Star Studios, specifically hired by Fox to lead their foray into Bollywood. </p>
						</div>

					</article>
				</section>
			</div>
		)
	}
};

module.exports = Leadership
