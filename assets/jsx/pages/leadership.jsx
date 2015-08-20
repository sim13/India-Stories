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
							<p>A start up specialist with experience of more than <em>20 years</em> in media industry spanning  Satellite Television, Satellite Radio, Music Record Label and Motion Pictures.
								Past assignments included Dy.CFO of <em>Star TV</em>, Managing Director and CFO <em>Asia Pacific World Space</em>, Group CFO Data Access, Managing Director Phat Phish India Pvt Limited and Producer at <em>Lightforms and Pictures</em> Pvt Ltd <br></br><br></br>
								Produced <em>Quick Gun Murugun</em>(presented by FoxStarStudios)  and
								Frozen( which premiered in the Toronto film festival 2007) as Managing
								Director <em>Phat Phish India</em> Private Limited and the film What the Fish !
								that was presented by Viacom18 Studios.<br></br><br></br>Harish has a professional background of being a Chartered Accountant
								and Cost Accountant.</p>
						</div>
						<div className="member-2 member">
							<h2> Trilok Malhotra</h2>
							<p>An industry veteran having spent over <em>28 years</em> in the industry in
							over 35 films. These films have grossed over <em>1500</em> crs of revenues.
							His experience spans the entire life cycle of film production
							management, starting from validation of scripting, budgeting,
							production, marketing and distribution of films. Has managed shoots in
							various locations of India, and overseas.<br></br><br></br>In his association with <em>Boney Kapoor</em> he executed films of such scale
							as Roop Ki Rani Choron Ka Raja, Pukar, Prem and Sirf Tum. He also set
							up the initial production for Rang De Basanti.<br></br><br></br>Was until recently the Head of Production of <em>Fox Star Studios</em>,
							specifically hired by Fox to lead their foray into Bollywood. He was
							responsible for films including My Name is Khan, Jolly LLb, Force, Dum
							Maro Dum, Bol Bachchan, Raaz 3D and Murder 3.<br></br><br></br>He brings the right balance of creativity and business acumen which
							is key for a business like the film business.
 							Above all, he enjoys <em>great goodwill</em> in the industry. This depth of
							relationship gives him unparalleled access to all key talent in the
							industry – be it top stars, directors, music directors and technical
							crew.</p>
						</div>

					</article>
				</section>
			</div>
		)
	}
};

module.exports = Leadership
