import * as posenet from '@tensorflow-models/posenet';

const imageScaleFactor = 0.2;
const outputStride = 8;
const flipHorizontal = false;

const net = posenet.load(0.50);

function getPosition(pose, expectedPart) {
  const part = pose.keypoints.find(element => element.part === expectedPart);
  if(part === undefined) {
    return {
      x: 0,
      y: 0
    }
  } else {
    return part.position;
  }
}

function ypose(data) {
    return data.leftWrist.x < data.leftElbow.x &&
      data.leftElbow.x < data.leftShoulder.x && 
      data.rightShoulder.x < data.rightElbow.x &&
      data.rightElbow.x < data.rightWrist.x &&
      data.leftWrist.y < data.leftElbow.y &&
      data.leftElbow.y < data.leftShoulder.y && 
      data.rightShoulder.y > data.rightElbow.y &&
      data.rightElbow.y > data.rightWrist.y;
  }
  
  function mpose(pose) {
    return false;
  }
  
  function calculatePose(pose) {
    const data = {
      leftShoulder: getPosition(pose, "leftShoulder"),
      leftElbow: getPosition(pose, "leftElbow"),
      leftWrist: getPosition(pose, "leftWrist"),
      rightShoulder: getPosition(pose, "rightShoulder"),
      rightElbow: getPosition(pose, "rightElbow"),
      rightWrist: getPosition(pose, "rightWrist")
    }

    console.log(data);

    if(ypose(data)) {
      return 'Y';
    } else if(mpose) {
      return 'M';
    }
  
    return 'N';
  }

export default async function estimateSinglePose(imageElement, callback) {
    const generatedNet = await net;

    generatedNet.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride).then(function(pose){
      const calculatedPose = calculatePose(pose);
        callback(calculatedPose);
    });
  }