var	React = require('react')
import Svg_up from './svg_upload.jsx';

export class FacebookLink extends React.Component{
	constructor(props){
		super(props);
	} 

	render(props) {
		return (
			<a href={this.props.src} className='facebook-link'>
				<Svg_up svg="fblink" className="social-link fb-link"/>
			</a>
		)
	}
}

export class TwitterLink extends React.Component{
	constructor(props){
		super(props);
	} 

	render(props) {
		return (
			<a href={this.props.src} className='twitter-link'>
				<Svg_up svg="twitterlink" className="social-link twitter-link"/>
			</a>
		)
	}
}

// module.exports = Copyright