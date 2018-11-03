import React from 'react';

import Webcam from "react-webcam";

import * as posenet from '@tensorflow-models/posenet';

const imageScaleFactor = 0.5;
const outputStride = 16;
const flipHorizontal = false;

function estimateSinglePose(imageElement) {
  // load the posenet model from a checkpoint
  console.log('asdf');
  const net = posenet.load().then(function(net) {
    return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride);
  }).then(function(pose){
    console.log(pose);
  });
}

class WebcamCapture extends React.Component {
    setRef = webcam => {
      this.webcam = webcam;
    };

    capture = () => {
      const imageSrc = this.webcam.getScreenshot();
      console.log(imageSrc);
      let asdf = new Image(1280, 720);
      asdf.src = imageSrc;
      estimateSinglePose(asdf);
    };
   
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
          <button onClick={this.capture}>Capture photo</button>
        </div>
      );
    };
  }

  export default WebcamCapture;