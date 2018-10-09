// CSS Imports
import './App.css';

// Application imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {
  static get propTypes() {
    return {
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
      dispatch: PropTypes.func.isRequired,
      focused: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
        cpuUsage: PropTypes.number,
      }).isRequired,
    };
  }

  selectProcess(sel) {
    const { dispatch } = this.props;
    dispatch({ type: 'SELECT_PROCESS', elem: sel });
  }

  render() {
    const {
      data,
      focused,
    } = this.props;
    const paragraph = focused ? (
      <p>
        <span>
          ID&nbsp;:
          <span>{focused.id}</span>
        </span>
        <span>
          Description&nbsp;:
          <span>{focused.desc}</span>
        </span>
        <br />
        <span>
          CPU usage&nbsp;:
          <span>{focused.cpuUsage}</span>
          %
        </span>
      </p>
    ) : null;

    return (
      <div id="app">
        <h1>
          {data.length}
          &nbsp;running processes
        </h1>
        <ul>
          {data.map(obj => <li href="#" key={obj.id.toString()} onClick={this.selectProcess.bind(this, obj)}>{obj.title}</li>)}
        </ul>
        {paragraph}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.data,
    focused: state.focused,
  };
}

export default connect(mapStateToProps)(App);
