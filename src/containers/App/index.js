import React, { Component } from "react";
import { connect } from "react-redux";

import "./index.css";
import * as actions from "../../actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { timer: null, toggle: true, toggleText: "start" };
  }

  handleToggleCLick = () => {
    if (this.state.toggle) {
      this.setState({
        timer: setInterval(() => {
          this.props.handleStart();
        }, 1000),
        toggle: false,
        toggleText: "stop"
      });
    } else {
      clearTimeout(this.state.timer);
      this.setState({
        timer: null,
        toggle: true,
        toggleText: "start"
      });
    }
  };

  handleReset = () => {
    this.props.handleReset();
  };

  render() {
    console.log("render");
    return (
      <div className="container">
        <div className="number">{this.props.count}</div>
        <div className="btn-group">
          <button className="btn" onClick={this.handleToggleCLick}>
            {this.state.toggleText}
          </button>
          <button className="btn" onClick={this.props.handleReset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleStart: () => {
      dispatch(actions.start());
    },
    handleStop: () => {
      dispatch(actions.stop());
    },
    handleReset: () => {
      dispatch(actions.reset());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
