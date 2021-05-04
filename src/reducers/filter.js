import { FILTER_GAME } from '../actions/actionTypes';

const ALL = { filter: '' };

function filterReducer(state = ALL, action) {
  switch (action.type) {
    case FILTER_GAME:
      return {
        ...state,
        filter: action.payload === 'ALL' ? '' : action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
