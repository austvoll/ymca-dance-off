import { UPDATE_DESIRED_POSITION, UPDATE_ACTUAL_POSITION } from '../constants';



export function updateDesiredPosition(data) {
    return {
        type: UPDATE_DESIRED_POSITION,
        desiredPosition: data.desiredPosition
    };
}

export function updateActualPosition(data) {
  return {
    type: UPDATE_ACTUAL_POSITION,
    actualPosition: data.actualPosition
  };
}

