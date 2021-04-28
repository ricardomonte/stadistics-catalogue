import { combineReducers } from 'redux';
import game from './game';
import images from './game';

const rootReducer = combineReducers({
  game,
  images,
});

export default rootReducer;
