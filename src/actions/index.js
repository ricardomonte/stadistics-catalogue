import * as types from './actionTypes';
import * as gamesAPi from '../API/Api';

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS,
    payload: games,
  };
}

export function loadGames() {
  return function (dispatch) {
    return gamesAPi
      .getGames()
      .then((games) => {
        dispatch(loadGamesSuccess(games));
      })
      .catch((error) => {
        throw error;
      });
  };
}
