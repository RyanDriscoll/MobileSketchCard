import { combineReducers } from 'redux';
import * as framesReducer from './frames';

export default combineReducers(Object.assign(
  framesReducer
));
