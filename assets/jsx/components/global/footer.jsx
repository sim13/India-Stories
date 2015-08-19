
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
					<h3> INDIA STORIES PVT. LTD. </h3>
					<h4>
						<span> A-123, Chowk Nagar </span>
						<span> Mumbai - 220019 </span>
						<span> +91-9955511100 </span>
					</h4>
					<h5> 
						contact@indiastories.com
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
