import React from 'react';

import estimateSinglePose from '../../actions/pose';

import Webcam from "react-webcam";

class WebcamCapture extends React.Component {
    constructor(props) {
      super(props)
      this.capture = this.capture.bind(this);
    }

    setRef = webcam => {
      this.webcam = webcam;
    };

    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      let image = new Image(1280, 720);
      image.src = imageSrc;
      
      estimateSinglePose(image, (position) => {
        this.props.updateActualPosition({
          actualPosition: position
        });
      })
      
    };

    componentDidUpdate(prevProps) {
      if(prevProps.desiredPosition != this.props.desiredPosition) {
        this.capture();
      }
    }
   
    render() {
      const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
      };
   
      return (
        <div>
          <Webcam
            audio={false}
            height={350}
            ref={this.setRef}
            screenshotFormat="image/jpeg"
            width={350}
            videoConstraints={videoConstraints}
          />
        </div>
      );
    }
  }

  export default WebcamCapture;