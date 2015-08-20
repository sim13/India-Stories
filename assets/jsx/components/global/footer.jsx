
var React =  require('react/addons')

import Svg_up from '../../reusable-modules/svg_upload.jsx';
import Copyright from '../../reusable-modules/copyright.jsx';
import {FacebookLink, TwitterLink} from '../../reusable-modules/social.jsx';

export class Footer extends React.Component{
	render() {
		return (
			<footer id={this.props.id}>
				<section className="social-icons">
					<FacebookLink src="http://google.com/"/>
					<TwitterLink src="http://google.com/"/>
				</section>
				<section className="contact-info-box">
					<h3> INDIA STORIES MEDIA & ENTERTAINMENT PVT. LTD. </h3>
					<h4>
						<span> 706, Aston, Sundervan Complex </span>
						<span> Lokhandwala Road, Andheri (W) </span>
						<span> Mumbai - 400053 </span>
						<span> India </span>
						<span> +91 22 6166 8968 </span>
					</h4>
					<h5> 
						contact@indiastories.co.in
					</h5>

				</section>
				<Copyright name="INDIA STORIES INDIA PVT. LTD."/>
			</footer>
		)
	}

	backToTop() {
		TweenMax.to(window, 1, {scrollTo:{y:0}, ease:Power2.easeOut});
	}
}

module.exports = Footer
