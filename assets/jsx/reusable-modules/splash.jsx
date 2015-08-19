var	React = require('react')
import Svg_up from './svg_upload.jsx';
import SplashBG from './splashbg.jsx';

export class Splash extends React.Component{
	constructor(props){
		super(props);
	} 

	render(props) {
		return (
			<div className="splash">
				<SplashBG src={this.props.src}/>
				<h1>
					{this.props.children}
				</h1>
			</div>
		)
	}
}