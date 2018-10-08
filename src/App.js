import React from 'react';
import { connect } from 'react-redux';
import './App.css';

class App extends React.Component {

	selectProcess = ( sel ) => {
		console.log( "Selected: ", sel );
		this.props.dispatch({ type: 'SELECT_PROCESS', elem: sel });
	}

	render() {
		let paragraph;
		if (this.props.focused) {
			paragraph = <p>
				<span>ID&nbsp;: <span>{this.props.focused.id}</span></span>
				<span>Description&nbsp;: <span>{this.props.focused.desc}</span></span>
				<br/>
				<span>CPU usage&nbsp;: <span>{this.props.focused.cpuUsage}</span>%</span>
			</p>;
		} else {
			paragraph = <span></span>
		}

		return (
			<div id="app">
				<h1>{ this.props.data.length } running processes</h1>
				<ul>
					{ this.props.data.map( obj =>
						<li href="#" key={ obj.id.toString() } onClick={ this.selectProcess.bind( this, obj ) }>{ obj.title }</li>
					)}
				</ul>
				{ paragraph }
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		data: state.data,
		focused: state.focused
	};
}

export default connect(mapStateToProps)(App);
