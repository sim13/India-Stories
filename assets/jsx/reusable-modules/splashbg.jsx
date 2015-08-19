var	React 	= require('react')

export class SplashBG extends React.Component{
	render(props) {
		var srcLink = "url("+this.props.src+")";
		return (
			<div className="splash-bg" style={{backgroundImage: srcLink}}>
			</div>
		)
	}
}

module.exports = SplashBG