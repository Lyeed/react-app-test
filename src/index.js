// CSS Imports
import './index.css';

// Application imports
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Simulate received data
const processes = [
  {
    id: '0afe-4ef5', title: 'Windows explorer', desc: 'I explore folders and dig files', cpuUsage: 4.5698,
  },
  {
    id: '1024-4ef1', title: 'Cortana', desc: 'Which recipe would you like to hear ?', cpuUsage: 0.34,
  },
  {
    id: '389a-efg8', title: 'Chrome', desc: 'Gimme RAM', cpuUsage: 9.257,
  },
];

const initialState = {
  data: processes,
  focused: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'SELECT_PROCESS':
      return { focused: action.elem, data: state.data };
    default:
      return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
