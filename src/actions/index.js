import * as types from './actionTypes';
import * as gamesAPi from '../API/Api';

export function loadGamesSuccess(games) {
  return {
    type: types.LOAD_GAMES_SUCCESS,
    payload: games,
  };
}

export function loadGamesError(error) {
  return {
    type: types.LOAD_GAMES_ERROR,
    payload: error,
  };
}

export function loadScreenshotsSuccess(images) {
  return {
    type: types.LOAD_IMAGES_SUCCESS,
    payload: images,
  };
}

export function loadScreenshotsError(error) {
  return {
    type: types.LOAD_IMAGES_ERROR,
    payload: error,
  };
}

export function filterGame(filter) {
  return {
    type: types.FILTER_GAME,
    payload: filter,
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
        dispatch(loadGamesError(error.message));
      });
  };
}

export function loadScreenshots(id) {
  return function (dispatch) {
    return gamesAPi
      .getGamesImages(id)
      .then((images) => {
        dispatch(loadScreenshotsSuccess(images));
      })
      .catch((error) => {
        dispatch(loadScreenshotsError(error.message));
      });
  };
}
