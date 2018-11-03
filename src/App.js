import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebCam from './containers/WebCam';
import SoundPlayback from './containers/SoundPlayback';
import Star from './containers/Star';
import Score from './containers/Score';

import { updateDesiredPosition, updateActualPosition } from './actions';

import { connect } from 'react-redux'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      start: false
    }

    this.triggerStart = this.triggerStart.bind(this);
  }

  render() {
    return (
      <div className="App">
        <p>Test</p>
        <WebCam desiredPosition={this.props.desiredPosition} updateActualPosition={this.props.updateActualPosition} />
        <SoundPlayback updateDesiredPosition={this.props.updateDesiredPosition} start={this.state.start} />
        <Star score={this.props.score} />
        <button onClick={this.triggerStart}>Start</button>
        <Score score={this.props.score} />
      </div>
    );
  }

  triggerStart() {
    this.setState(state => ({
      start: true
    }));
  }
}

const mapStateToProps = state => {
  return {
    desiredPosition: state.anotherReducer.desiredPosition,
    score: state.anotherReducer.score
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDesiredPosition: data => dispatch(updateDesiredPosition(data)),
    updateActualPosition: data => dispatch(updateActualPosition(data))
  }
}

const VisibleApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default VisibleApp;
