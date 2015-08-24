var React  = require('react/addons')
var Svg_up = require('../reusable-modules/svg_upload.jsx')
	
class Home extends React.Component{
	constructor() {
		super()
		document.title = "IndiaStories"
	}

	render() {
		return (
			<div>
				<section className="splash-wrapper">
					<div className="splash-bg"></div>
				</section>
				<section className="about-us">
				 	<h2> OUR STORY </h2>
				 	<hr/>
				 	<p>
				 		India Stories Media & Entertainment Pvt. Ltd, is an integrated entertainment and communication company looking to encompass the <em>entire span of content</em> creation across Motion Pictures, Big Ticket Television content, Boutique Advertising Commercials , Public Service films and short form New Media Content.
						It prides itself  to be arguably the first true media house focused on  Stories rooted and originating from India, for the rest of the world. Additionally, as its internal mandate, India Stories will only make content that the <em>entire</em> family can watch together. 
					</p>
					<p>
				 		India Stories also prides itself in launching <em>new talent</em> across acting, music and direction . This comes from a solid understanding of content and appreciating the entire spectrum from creative to production and from distribution to targeted marketing.
				 		India Stories sees itself as an industry leader in operating in a strong corporate governance framework with best practices and <em>financial transparency</em> across the board.
				 	</p>
				 	<p>
				 		India Stories is in the process of setting up the India Stories Foundation to lead and support initiatives that go above and <em>beyond profit motive</em> and use the resources of the organization, monetary and non-monetary initiatives across art, education and senior citizen care. India Stories believes that art has a great role in ensuring a <em>culturally rich and sensitive society</em>.
				 	</p>
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
								Openness and adaptability.</p>
						</div>
					</article>
					<article className="mini-section">
						<Svg_up svg="Leadership" className="svg-icon"/>
						<div className="text-wrapper">
							<h3>Leadership</h3>
							<p>Shared Vision.
								Self Directed Teams.
								Leaders as merely custodians of creative tension.</p>
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
						<p> To tell great stories and thereby humanise life.</p>
					</article>
				</section>
				<section className="wide proposition">
					<h2>VALUE PROPOSITION</h2>
					<p>High credibility and access in the Industry.</p>
					<br/>
					<p>Perfect match between creative vision  and business wisdom.</p>
					<br/>
					<p>Optimally designed product portfolio to balance risk and return.</p>
				</section>
			</div>
		)
	}
};

module.exports = Home
