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
				 	<hr/>
				 	<p>
				 	<br>India Stories Media & Entertainment Pvt. Ltd, is an integrated entertainment and communication
company looking to encompass the entire span of content creation across Motion Pictures, Big
Ticket fiction content for Television, Boutique Advertising Commercials , Public Service films and
short form New Media Content

It sets itself to be arguably the first true media house producing content in India for the world.</br>

<br>India Stories also prides itself in launching new talent and high concept content . This comes
from a sound understanding of content and appreciating the entire spectrum from creative to
production and from distribution to targeted marketing.</br>

<br>Beyond the depth and range of content, India Stories sees itself as an industry leader in operating
in a strong corporate governance framework with best practices and financial transparency across
the board.</br>

The India Stories Foundation is being set up with an objective to lead and support initiatives
that go above and beyond profit motive and use the resources of the organization, monetary
and non-monetary to support all artists whose survival and nourishment ensure a culturally rich
society , to provide wings to young minds to soar towards their dreams and to take care of our
older generation to whom we owe our gratitude for bequeathing us the foundations of our lives
and of our country</p>
				</section>

				<section className="our-philosophy">
					<h2> OUR PHILOSOPHY</h2>
					<hr/>
					<article className="mini-section">
						<Svg_up svg="Brain" className="svg-icon"/>
						<div className="text-wrapper" >
							<h3>Systemic Thinking</h3>
							<p>All learnings will be institutionalized. 
								Orientation towards long term value v/s short term profit.
								Continuous Disruptive innovation.</p>
						</div>
					</article>
					<article className="mini-section">
						<Svg_up svg="Compass" className="svg-icon"/>
						<div className="text-wrapper">
							<h3>Core Values</h3>
							<p>Entertainment  using the power of imagination.
								Undistorted  transmission of culture and objective truths.
								No compromise on ethics and morality.
								Prudent transparency at all levels.</p>
						</div>
					</article>
					<article className="mini-section">
						<Svg_up svg="Personal-Mastery" className="svg-icon"/>
						<div className="text-wrapper">
							<h3>Personal Mastery</h3>
							<p>Core Competence. 
								Creative tension – aspiring to reach ideals. 
								Openness and adaptability</p>
						</div>
					</article>
					<article className="mini-section">
						<Svg_up svg="Leadership" className="svg-icon"/>
						<div className="text-wrapper">
							<h3>Leadership</h3>
							<p>Shared Vision.
								Self Directed Teams.
								Leaders as merely custodians of creative tension</p>
						</div>
					</article>
				</section>

				<section className="bg-image-grid">
					<article className="vision">
						<h2>VISION</h2>
						<p>To be the leading producer of entertainment content from India  for domestic and global audiences.</p>
					</article>
					<article className="mission">
						<h2>MISSION</h2>
						<p> To tell great stories and thereby humanize life.</p>
					</article>
					<article className="proposition">
						<h2>VALUE PROPOSITION</h2>
						<p>High credibility and access in the Industry.
						Perfect match between creative vision  and business wisdom. Optimally designed product portfolio to balance risk and return. Veteran team of professional managers poised to capture the growth when the industry is seeing an inflexion point.</p>
					</article>
				</section>
			</div>
		)
	}
};

module.exports = Home
