import React from 'react';

import posed from 'react-pose';
import styled from 'styled-components'

const Box = posed.div({
  visible: {
    opacity: 1,
    transition: {
      duration: 400,
      ease: 'linear'
    }
  },
  hidden: { opacity: 0 }
});

const StyledBox = styled(Box)`
  position: absolute;
  top: 200px; left: 600px;
  width: 200px;
  height: 200px;
  background-image: url("star.png");
`;

class Star extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
          isVisible: false
        }
    
        this.toggleVisibility = this.toggleVisibility.bind(this);
    }

    componentDidUpdate(prevProps) {
      if(prevProps.score != this.props.score) {
        this.setState(() => ({
          isVisible: true
        }));

        setTimeout(() => this.toggleVisibility(), 500);
      }
    }

    render() {
        return <StyledBox
            className="box"
            pose={this.state.isVisible ? 'visible' : 'hidden'}
        />
    }

    toggleVisibility() {
        this.setState(state => ({
          isVisible: !state.isVisible
        }));
      }
}

export default Star;