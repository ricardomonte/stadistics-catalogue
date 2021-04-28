import * as types from './actionTypes';
import * as gamesAPi from '../API/Api';

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS,
    payload: games,
  };
}

export function loadScreenshotsSuccess(images) {
  return {
    type: types.LOAD_IMAGES_SUCCESS,
    payload: images,
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

export function loadScreenshots() {
  return function (dispatch) {
    return gamesAPi.getGamesImages().then((images) => {
      dispatch(loadScreenshotsSuccess(images));
    });
  };
}
