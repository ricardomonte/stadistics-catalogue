import { combineReducers } from 'redux';
import game from './game';
import image from './images';

const rootReducer = combineReducers({
  game,
  image,
});

export default rootReducer;
