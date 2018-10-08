import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const processes = [// Simulate received data
	[ 0, { id: 0, title: 'Windows explorer', desc: 'I explore folders and dig files', cpuUsage: 4.5698 }],
	[ 1024, { id: 1024, title: 'Cortana', desc: 'Which recipe would you like to hear ?', cpuUsage: 0.34 }],
	[ 389, { id: 389, title: 'Chrome', desc: 'Gimme RAM', cpuUsage: 9.257 }],
];

ReactDOM.render(<App processes={ processes } />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
