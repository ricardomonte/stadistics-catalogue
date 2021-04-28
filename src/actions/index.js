import * as types from './actionTypes';
import * as gamesAPi from '../API/Api';

export const loadGamesSuccess = (games) => {
  return {
    type: types.LOAD_GAMES_SUCCESS,
    payload: games,
  };
};

export const loadGames = () => {
  return (dispatch) => {
    return gamesAPi
      .getGames()
      .then((games) => {
        dispatch(loadGamesSuccess(games));
      })
      .catch((error) => {
        throw error;
      });
  };
};
