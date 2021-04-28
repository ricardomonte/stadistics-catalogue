import * as types from '../actions/actionTypes';

const imagesReducer = (state = [], action) => {
  switch (action.type) {
    case types.LOAD_IMAGES_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};

export default imagesReducer;
