import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
	constructor( props ) {
		super( props );
		this.state = {
			data: props.processes,
			focused: { desc: "Aucune", cpuUsage: "X" },
		};
	}

	handleClick( sel ) {
		console.log( "Clicked: ", sel );
		this.setState( { focused: sel } );
	}

	render() {
		return (
			<div id="app">
				<h1>{ this.state.data.length } running processes</h1>
				<ul>
					{ this.state.data.map( ([key, val]) =>
						<li href="#" key={ key.toString() } onClick={this.handleClick.bind( this, val )}>{ val.title }</li>
					)}
				</ul>
				<p>
					<span>Description&nbsp;: <span>{ this.state.focused.desc }</span></span>
					<span>CPU usage: <span>{ this.state.focused.cpuUsage }</span>%</span>
				</p>
			</div>
		);
	}
}

export default App;
