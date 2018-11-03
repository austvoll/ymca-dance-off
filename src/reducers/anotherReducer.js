const initialState = {score: 0, desiredPosition: 'N', success: true}

function anotherReducer(state = initialState, action) {
    switch (action.type) {
        case 'UPDATE_DESIRED_POSITION':
            return Object.assign({}, state, {
                desiredPosition: action.desiredPosition
            })
        case 'UPDATE_ACTUAL_POSITION':
            if(state.desiredPosition === action.actualPosition) {
                return Object.assign({}, state, {
                    score: state.score + 100,
                    success: true
                })    
            } else {
                return Object.assign({}, state, {
                    score: state.score,
                    success: false
                })
            }
        default:
          return state
    }
}

export default anotherReducer;