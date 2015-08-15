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
				 	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.

					"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
				</section>
				<section className="our-philosophy">
					<h2> OUR PHILOSOPHY</h2>
					<div className="mini-section-1">
						<Svg_up svg="Brain" className="section-1"/>
						<div className=" brain-text section-1" >
							<h2>Systemic Thinking</h2>
							<p>All learnings will be institutionalized. 
								Orientation towards long term value v/s short term profit.
								Continuous Disruptive innovation.</p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Personal-Mastery" className="section-1"/>
						<div className="brain-text section-1">
							<h2>Personal Mastery</h2>
							<p>Core Competence. 
								Creative tension – aspiring to reach ideals. 
								Openness and adaptability</p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Leadership" className="section-1"/>
						<div className="brain-text section-1">
							<h2>Leadership</h2>
							<p>Shared Vision.
							Self Directed Teams.
						Leaders as merely custodians of creative tension</p>
						</div>

					</div>
					<div className="mini-section-1">
						<Svg_up svg="Compass" className="section-1"/>
						<div className="brain-text section-1">
							<h2>Core Values</h2>
							<p>Entertainment  using the power of imagination.
								Undistorted  transmission of culture and objective truths.
								No compromise on ethics and morality.
								Prudent transparency at all levels.</p>
						</div>

					</div>
				</section>
				<section className="Vision">
					<h2>VISION</h2>
					<p>To be the leading producer of entertainment content from India  for domestic and global audiences.</p>

				</section>

				<section className="Mission">
					<h2>MISSION</h2>
					<p> To tell great stories and thereby humanize life.</p>

				</section>

				<section className="Propostion">
					<h2>VALUE PROPOSITION</h2>
					<p>High credibility and access in the Industry.

					Perfect match between creative vision  and business wisdom.

					Optimally designed product portfolio to balance risk and return.

					Veteran team of professional managers poised to capture the growth when the industry is seeing an inflexion point.</p>

				</section>
			</div>
		)
	}
};

module.exports = Home
