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
							<h3>Jatin Ravasia</h3>
							<p>
								Associate to Dibakar in Khosla ka Ghosla.
								Over 2500 hrs of TV, Television commercials and Corporate films
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Sagar Ballary</h3>
							<p>
								An alumnus in Direction & Screenplay Writing from the Satyajit Ray Film and Television Institute Sagar made Bheja Fry which went on to be a cult success as well as a commercial blockbuster.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Padmakumar</h3>
							<p>
								Former National Creative Head – Rediffussion. Prior to that hee has also worked with McCann Worldgroup Sri Lanka as Executive Creative Director, South East Asia, and ventured into scripting and directing commercials for brands in Singapore and Sri Lanka.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Shashanka Ghosh</h3>
							<p>
								Shashanka Ghosh has been associated with the media world for over 18 years. He was one of the key players to define and add character to the emerging face of the entertainment TV in India, having launched MTV India and then Channel [V], where he worked as Creative Director and then as Dy. General Manager. He has won many international awards for his distinctive work.
								<br/>
								<br/>
								Shashanka became famous with his cult films like Waisa Bhi Hota Hai and Quick Gun Murugun. His last release Khoobsurat starring Sonam Kapoor and Fawad Khan was a mainstream commercial success.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Sanjay Puran Singh Chauhan</h3>
							<p>
								Sanjay Puran Singh Chauhan is most known for his award winning and internationally acclaimed film Lahore. After setting the international festival circuits ablaze he won the Indira Gandhi Award for Best First Film of a Director at the 2009 National Film Awards.Lahore also won National Film Award for Best Supporting Actor for the late Farooque Shaikh won .
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Glen - Ankush</h3>
							<p>
								The Director duo Glen Ankush began their film career as a Chief Assistant Director in films such as Joh Jeeta Wohi Sikander Starring Aamir Khan / Ayesha Julka / Pooja Bedi and Akele Hum Akele Tum starring Aamir Khan / Manisha Koirala.They have also created numerous iconic shows on Television including Hip Hip Hooray and “Woh”. They recently directed the mega series Everest for Star Plus and are currently directing a film produced by Ashutosh Gowarikar.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">HINDI</span>
							<h3>Chinmay Purohit</h3>
							<p>
								Very strong theatre and television background as director. He also assisted the acclaimed Kundan Shah for many years.
								<br/>
								<br/>
								This is his debut film.
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
							<h3>Shiba Prasad Mukherjee and Nandita Roy</h3>
							<p>
								They are amongst the few director duos in the history of Bengali cinema to have achieved success both critically and commercially .
								<br/>
								<br/>
								They have directed films like Icche, Muktodhara, Accident, Alik Sukh and Ramdhanu . Their latest release Bela Sheshe(2015) about the institution of marriage is already a runaway success commercially.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Bengali Cinema</span>
							<h3>Udayan Namboodiri</h3>
							<p>
								In a career spanning 28 years, international journalist Udayan Namboodiri is also the author of “Bangal’s night without end” and former Senior Editor of Daily Pioneer.
								<br/>
								<br/>
								This is his debut feature film after his acclaimed documentary “The Girl who lost her name”.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Bengali Cinema</span>
							<h3>Nitish Roy</h3>
							<p>
								Director of Bengali films like Ek Poshla Bishti, Tobu Mone Rekho and Mahakaash Kando
								<br/>
								<br/>
								3 times recipient of the National Award for Best Art Director / Production Designer for feature films
								<br/>
								<br/>
								8 times recipient of Bengali Films Journalists Association (BFJA) Award for Best Art Director
								<br/>
								<br/>
								Filmfare Award for Best Art Director / Production Designer
								<br/>
								<br/>
								2 times recipient of Govt. Of West Bengal Award for Best Art Director
								<br/>
								<br/>
								They have directed films like Icche, Muktodhara, Accident, Alik Sukh and Ramdhanu . Their latest release Bela Sheshe(2015) about the institution of marriage is already a runaway success commercially.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Marathi</span>
							<h3>Jatin Wagle</h3>
							<p>
								Jatin is from the new crop of Directors who are making waves in the Marathi film industry with their fresh subjects and treatment. Jatin’s films include Chakwa, and Ek Marathi Manoos. He has won numerous awards and nominations including 2 state awards. His next Marathi film with Mahesh Manjrekar is slated for release by December 2015.
							</p>
						</li>
						<li className="film-item">
							<span className="film-language">Assamese</span>
							<h3>Bidyut Kotoky</h3>
							<p>
								Bidyut’s debut Asamese film Bhraimoman Theatre won him the Special Jury Award in the 53rd National Awards. His next feature Ekhon Nedekha Nodir Xhipare (“As the River Flows”) won many international awards including the Audience Choice Award at the North Carolina International South Asian Film Festival (NCISAFF).
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
							These films will be mentored by reputed and respected directors from Hindi Film Industry as well as from regional cinema.
						</p>
						<p>
							In addition to featuring known as well as fresh talent, these films will carry exceptional production values, and scale that are usually absent from films traditionally made for television and raise the bar on films for TV.
						</p>
					</article>
				</section>
				<Splash src="/img/advert.jpg">
					<em>ADVERTISING FILMS</em>
				</Splash>
				<section className="advertising-films info-section">
					<article>
						<p>
							A roster of Directors that span the entire range of specialization – from full length feature films to short duration commercials (and all in between!)
						</p>
						<p>
							A very strong production infrastructure and skill sets that sets very high standards of execution skills and delivery timelines.
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
							With the expected roll out of 4G, increased broadband penetration, personalized , media consumption, short video on demand will take a huge leap in the coming years.
						</p>
						<p>
							The New Media Content would be largely content created for consumption on cell phones. These would be short format content and would initially focus on Comedy but with the strategy of creating “personalities” who would build a community of fan-base around them. This would then progress to drama, romance and reality genres as the audiences
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
							As part of our advocacy initiatives, these would be films made with no profit motive with the wish to empower filmmakers and provide them opportunities to articulate their ideas and visions on issues like human rights, gender and sexuality, environment, conflict, diversity, and cultural pluralism and identity, among others
						</p>
					</article>
				</section>
			</section>
		)
	}
};

module.exports = Projects
