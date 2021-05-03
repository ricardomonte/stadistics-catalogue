import * as types from '../actions/actionTypes';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_GAMES_ERROR:
      return {
        errorLoad: action.payload,
      };
    case types.LOAD_IMAGES_ERROR:
      return { errorImage: action.payload };
    default:
      return state;
  }
};

export default errorReducer;
