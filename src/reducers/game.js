import * as types from '../actions/actionTypes';

const gameReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_GAMES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default gameReducer;
