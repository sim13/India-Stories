var React  = require('react/addons')
var Svg_up = require('../reusable-modules/svg_upload.jsx')

import {Splash} from '../reusable-modules/splash.jsx'
	
export class Projects extends React.Component{
	constructor() {
		super()
		document.title = "IndiaStories | Projects"
	}

	render() {
		return (
			<section className="page projects">
				<h1> PROJECTS </h1>
				<Splash src="/img/hindi.jpg">
					<em>HINDI FILMS</em> UNDER DEVELOPMENT
					<span className="sub-text">Projects underway with the following directors</span>
				</Splash>
				<section className="hindi info-section">
					<ul className="film-list hindi-list">
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Shashanka Ghosh</h3>
							<p>
								Shashanka has been associated with the media world for over 18 years. He was one of the key players to define and add character to the emerging face of the entertainment TV in India, having launched MTV India and then Channel [V], where he worked as Creative Director and then as Dy. General Manager. He has won many international awards for his distinctive work.
								<br/>
								<br/>
								Shashanka became famous with his cult films like 'Waisa Bhi Hota Hai' and 'Quick Gun Murugun'. His last release 'Khoobsurat' starring Sonam Kapoor and Fawad Khan was a mainstream commercial success.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Sagar Ballary</h3>
							<p>
								An alumnus in Direction & Screenplay Writing from the Satyajit Ray Film and Television Institute. Sagar made 'Bheja Fry' which went on to be a cult success as well as a commercial blockbuster.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Padmakumar</h3>
							<p>
								Former National Creative Director – Rediffussion. Prior to that he has also worked with McCann Worldgroup Sri Lanka as Executive Creative Director, South East Asia, and ventured into scripting and directing commercials for brands in Singapore and Sri Lanka.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Glen - Ankush</h3>
							<p>
								The Director duo Glen - Ankush began their film careers assisting Mansoor khan and went on to direct films on their own. They also have under their belts over ten thousand hours of Television content including the mega series ‘Everest’ for Star Plus.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Jatin Ravasia</h3>
							<p>
								Associate to Dibakar Banerjee in 'Khosla ka Ghosla'
								<br/>
								<br/>
								Over 2500 hrs of TV, Television commercials and Corporate films
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Chinmay Purohit</h3>
							<p>
								Chinmay bagan his film career assisting the acclaimed Director Kundan Shah. He comes with a very strong theatre background and has directed many successful shows for leading Television networks across the country.
							</p>
						</li>
				
					</ul>
				</section>
				<Splash src="/img/regional.jpg">
					<em>REGIONAL FILMS</em> UNDER DEVELOPMENT
				</Splash>
				<section className="regional info-section">
					<ul className="film-list hindi-list">
						<li className="film-item">
							<span className="film-language">Bengali Cinema</span>
							<h3>Shibo Prosad Mukherjee and Nandita Roy</h3>
							<p>
								They are amongst the few director duos in the history of Bengali cinema to have achieved success both critically and commercially.
								<br/>
								<br/>
								They have directed films like 'Icche', 'Muktodhara', 'Accident', 'Alik Sukh' and 'Ramdhanu' . Their latest release 'Bela Seshe'(2015) about the institution of marriage is already a runaway success commercially.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Bengali Cinema</span>
							<h3>Nitish Roy</h3>
							<p>
								Director of Bengali films like 'Ek Poshla Brishti', 'Tobu Mone Rekho' and 'Mahakash Kando'.
								<br/>
								<br/>
								Recipient of many awards including three National Awards and a Filmfare award for Best Art Director / Production Designer for feature films.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Bengali Cinema</span>
							<h3>Udayan Namboodiry</h3>
							<p>
								In a career spanning 28 years with major national and international media

									houses, Udayan Namboodiry is also the author of ‘Bengal’s night without

									end’. He is also the director of the acclaimed documentary ‘The Girl who lost her name’. 
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Marathi</span>
							<h3>Jatin Wagle</h3>
							<p>
								Jatin is from the new crop of Directors who are making waves in the Marathi film industry with their fresh subjects and treatment. Jatin’s films include 'Chakwa', and 'Ek Marathi Manoos'. He has won numerous awards and nominations including 2 state awards. His next Marathi film ‘Bandh Nylon Che’ with Mahesh Manjrekar  is slated for release by December 2015.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Assamese</span>
							<h3>Bidyut Kotoky</h3>
							<p>
								Bidyut’s debut Asamese film 'Bhraimoman Theatre' won him the Special Jury Award in the 53rd National Awards.His next feature ‘Ekhon
								Nedekha Nodir Xhipare’ won many international
								awards including the Audience Choice Award at the North Carolina
								International South Asian Film Festival (NCISAFF).
							</p>
						</li>
					</ul>
				</section>
				<Splash src="/img/bigbudget.jpg">
					<em>BIG TICKET TELEVISION</em>
				</Splash>
				<section className="tv info-section">
					<article>
						<p>
							Two large projects are currently under development by the Company for global distribution.
						</p>
						<p>
							One is in the genre of techno-mythology and fantasy and the other is a historical-spiritual odyssey based in the Buddhist times.
						</p>
						<p>
							The Company is currently in the process of securing additional developmental funding from a group of international and domestic investors.
						</p>
					</article>
				</section>
				<Splash src="/img/tv.jpg">
					<em>FILMS FOR TV</em>
				</Splash>
				<section className="tv-films info-section">
					<article>
						<p>
							The Company has also finalized its plan for rolling out a series of films specifically for television audiences.
						</p>
						<p>
							These films will be mentored by reputed and respected directors from Hindi Film Industry as well as from Regional cinema.
						</p>
						<p>
							In addition to featuring known as well as fresh talent, these films will carry exceptional production values, and scale that are usually absent from films traditionally made for television and thereby raising the bar of films for TV.
						</p>
					</article>
				</section>
				<Splash src="/img/filmads.jpg">
					<em>ADVERTISING FILMS</em>
				</Splash>
				<section className="advertising-films info-section">
					<article>
						<p>
							A roster of Directors that span the entire range of specialization – from full length feature films to short duration commercials (and all in between!)
						</p>
						<p>
							A very strong production infrastructure and skill sets that carry very high standards of execution skills and delivery timelines.
						</p>
						<p>
							Over 200 years of combined experience across features, promos, ads etc.
						</p>
					</article>
				</section>
				<Splash src="/img/newmedia.jpg">
					<em>NEW MEDIA</em>
				</Splash>
				<section className="new-media info-section">
					<article>
						<p>
							With the expected roll out of 4G, increased broadband penetration, and personalized media consumption, short video on demand will take a huge leap in the coming years.
						</p>
						<p>
							The New Media Content would be largely created for consumption on cell phones. These would be short format content and would initially focus on Comedy but with the strategy of creating “personalities” who would build a community of fan-base around them. This would then progress to drama, romance and reality genres as the audiences expand.
						</p>
					</article>
				</section>
				<Splash src="/img/psfilms.jpg">
					<em>PUBLIC SERVICE FILMS</em>
				</Splash>
				<section className="public-service-films info-section">
					<article>
						<p>
							Films are an extremely significant means to raise crucial social concerns and to stimulate dialogue, and an involved and passionate public discourse around them.
						</p>
						<p>
							As part of our advocacy initiatives, these would be films made with no profit motive to empower filmmakers and provide them opportunities to articulate their ideas and visions on issues like human rights, gender and sexuality, environment, conflict, diversity, and cultural pluralism and identity, among others.
						</p>
					</article>
				</section>
			</section>
		)
	}
};

module.exports = Projects
