import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebCam from './containers/WebCam';
import SoundPlayback from './containers/SoundPlayback';
import posed from 'react-pose';
import styled from 'styled-components'

const Box = posed.div({
  visible: {
    opacity: 1,
    transition: { 
      opacity: { 
        ease: 'circInOut',
        duration: 300
      } 
    }
  },
  hidden: { opacity: 0 }
});

const StyledBoxA = styled(Box)`
  width: 100px;
  height: 100px;
  background: #ff1c68;
  transform-origin: 50% 50%;
`;

const StyledBox = styled(Box)`
  position: absolute;
  top: 40px; left: 600px;
  width: 100px;
  height: 100px;
  background-image: url("star.png");
`;

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      isVisible: true
    }

    this.toggleVisibility = this.toggleVisibility.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <p>Test</p>
        {/*<WebCam />*/}
        <StyledBox
          className="box"
          pose={this.state.isVisible ? 'visible' : 'hidden'}
          onClick={this.toggleVisibility}
        />
        <SoundPlayback />
      </div>
    );
  }

  toggleVisibility() {
    this.setState(state => ({
      isVisible: !state.isVisible
    }));
  }
}

export default App;
