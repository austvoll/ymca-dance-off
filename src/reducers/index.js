import { combineReducers } from 'redux';
import anotherReducer from './anotherReducer';
import defaultReducer from './defaultReducer';

const myReducers = combineReducers({
    defaultReducer,
    anotherReducer
});

export default myReducers