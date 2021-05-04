import { combineReducers } from 'redux';
import game from './game';
import image from './images';
import filter from './filter';
import manageErr from './managesErrors';

const rootReducer = combineReducers({
  game,
  image,
  filter,
  manageErr,
});

export default rootReducer;
