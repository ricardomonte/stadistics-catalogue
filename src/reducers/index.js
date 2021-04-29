import { combineReducers } from 'redux';
import game from './game';
import image from './images';
import filter from './filter';

const rootReducer = combineReducers({
  game,
  image,
  filter,
});

export default rootReducer;
