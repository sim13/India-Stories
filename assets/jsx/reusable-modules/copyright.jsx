var	React 	= require('react')

export class Copyright extends React.Component{
	constructor(props){
		super(props);
	} 

	render(props) {
		const time = new Date().getFullYear();
		return (
			<span className='copyright'>
				© {time} <span className="bold">{this.props.name}</span> All Rights Reserved
			</span>
		)
	}

}

module.exports = Copyright