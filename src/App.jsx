// CSS Imports
import './App.css';

// Application imports
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  focused: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    desc: PropTypes.string,
    cpuUsage: PropTypes.number,
  }),
  dispatch: PropTypes.func,
};

const defaultProps = {
  focused: null,
  dispatch: undefined,
};

const mapStateToProps = state => ({
  data: state.data,
  focused: state.focused,
});

class App extends React.Component {
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

App.propTypes = propTypes;
App.defaultProps = defaultProps;

const AppConn = connect(mapStateToProps)(App);
export default AppConn;
